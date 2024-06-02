import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';

import { EventBus } from '../event-bus';

export default class Component {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element: any = null;
  _meta: any = null;
  _id: string | null = null;
  _props: any;
  _children: any;
  _lists: any;

  eventBus: () => EventBus;

  constructor(tagName = 'div', proposals = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
    };

    this._id = makeUUID();

    // console.log({...proposals});

    const { children, props, lists } = this._separateProps(proposals);

    this._props = this._makePropsProxy({ ...props, __id: this._id });
    this._children = children;
    this._lists = lists;
    this.eventBus = () => eventBus;

    // console.log({...this});
    // console.log({
    //   props: {...this._props},
    //   children: {...this._children},
    //   lists: {...this._lists},
    // });

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus: any) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(tagName: any) {
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    const { tagName } = this._meta;
    this._createResources(tagName);
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this._).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(oldProps?: any) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  _separateProps(proposals: any) {
    const props: any = {};
    const lists: any = {};
    const children: any = {};

    Object.entries(proposals).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value;
      } else if(Array.isArray(value)) {
        const hasChildren = value.some((item) => item instanceof Component);
        
        if(hasChildren) {
          lists[key] = value;
        } else {
          props[key] = value;
        }
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this._props, nextProps);
  };

  get element() {
    return this._element;
  }

  compile(template: any, props?: any) {
    const propsAndStubs = { ...props };

    if (this._children) {
      Object.entries(this._children).forEach(([key, child]) => {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      });
    }

    if (this._lists) {
      Object.entries(this._lists).forEach(([key, _]) => {
        propsAndStubs[key] = `<div data-id="__l_${key}"></div>`;
      });
    }

    const fragment = this._createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    if (this._children) {
      Object.values(this._children).forEach((child) => {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
        if (stub) {
          stub.replaceWith(child.getContent());
        }
      });
    }

    if (this._lists) {
      Object.entries(this._lists).forEach(([key, value]) => {
        const stub = fragment.content.querySelector(`[data-id="__l_${key}"]`);
        if (stub) {
          const listContent = this._createDocumentElement('template');

          value.forEach((item) => {
            if(item instanceof Component) {
              listContent.content.append(item.getContent());
            } else {
              listContent.content.append(`${item}`)
            }
          });
          stub.replaceWith(listContent.content);
        }

      });

    }

    return fragment.content;
  }

  _render() {
    this._removeEvents();
    this._element.innerHTML = '';
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    if (typeof block === 'string') {
      this._element.innerHTML = block;
    } else {
      if(!!block) {
        this._element.appendChild(block);
      }
    }
    this._addEvents();
  }

  _addEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  render() {}

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: any) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Component.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: any) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);

    if (this._props?.class) {
      element.setAttribute('class', this._props.class);
    }

    return element;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}

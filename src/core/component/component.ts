import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';

import { EventBus } from '../event-bus';
import { Children, Lists, Props } from './types';

export default class Component {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement | null = null;
  private _tagName: string = '';
  public _id: string | null = null;
  protected _props: Props;
  protected _children: Children;
  protected _lists: Lists;

  eventBus: () => EventBus;

  constructor(tagName = 'div', proposals: Props = {}) {
    const eventBus = new EventBus();
    this._tagName = tagName;

    this._id = makeUUID();

    const { children, props, lists } = this._separateProps(proposals);

    this._props = this._makePropsProxy({ ...props, __id: this._id });
    this._children = children;
    this._lists = lists;
    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources(tagName: string) {
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources(this._tagName);
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this._children).forEach((child) => {
      if (child instanceof Component) {
        child.dispatchComponentDidMount();
      }
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps?: Props, newProps?: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }

    this._render();
  }

  componentDidUpdate(oldProps?: Props, newProps?: Props) {
    if(oldProps !== newProps) {
      return false;
    }
    
    return true;
  }

  _separateProps(proposals: Props) {
    const props: Props = {};
    const lists: Lists = {};
    const children: Children = {};

    Object.entries(proposals).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        const hasChildren = value.some((item) => item instanceof Component);

        if (hasChildren) {
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

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this._props, nextProps);
  };

  get element() {
    return this._element;
  }

  compile(template: string, props?: Props): DocumentFragment {
    const propsAndStubs = { ...props };

    if (this._children) {
      Object.entries(this._children).forEach(([key, child]) => {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      });
    }

    if (this._lists) {
      Object.entries(this._lists).forEach(([key]) => {
        propsAndStubs[key] = `<div data-id="__l_${key}"></div>`;
      });
    }

    const fragment = document.createElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    if (this._children) {
      Object.values(this._children).forEach((child) => {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
        const childContent = child.getContent();
        
        if (stub && childContent) {
          stub.replaceWith(childContent);
        }
      });
    }

    if (this._lists) {
      Object.entries(this._lists).forEach(([key, value]) => {
        const stub = fragment.content.querySelector(`[data-id="__l_${key}"]`);
        if (stub) {
          const listContent = document.createElement('template');

          value.forEach((item) => {
            if (item instanceof Component) {
              const itemContent = item.getContent();

              if(itemContent) {
                listContent.content.append(itemContent);
              }
            } else {
              listContent.content.append(`${item}`);
            }
          });
          stub.replaceWith(listContent.content);
        }
      });
    }

    return fragment.content;
  }

  _render() {

    if(!this._element) {
      return;
    }

    this._removeEvents();
    this._element.innerHTML = '';

    const block = this.render();

    if (typeof block === 'string') {
      this._element.innerHTML = block;
    } 

    if (typeof block === 'object') {
      this._element.appendChild(block as DocumentFragment);
    }

    this._addEvents();
  }

  _addEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  _removeEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  render() {}

  getContent() {
    return this._element;
  }

  _makePropsProxy(props: Props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop as string] = value;

        self.eventBus().emit(Component.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);

    if (this._id) {
      element.setAttribute('data-id', this._id);
    }

    if (typeof this._props?.class === 'string') {
      element.setAttribute('class', this._props.class);
    }

    return element;
  }
}

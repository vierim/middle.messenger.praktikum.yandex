import { expect } from 'chai';
import sinon from 'sinon';

import Component from './component';
import type { Props } from './types';

describe('Component', () => {
  let TestComponent: new (props: Props) => Component;

  beforeEach(() => {
    class NewComponent extends Component {
      constructor(props: Props) {
        super('div', {
          ...props,
          class: 'test-element',
        });
      }

      render() {
        return this.compile(
          `<span id="test-text">{{text}}</span>
          <button>{{text-button}}</button>`,
          { ...this._children, ...this._props }
        );
      }
    }

    TestComponent = NewComponent;
  });

  it('should initialize component with state from props', () => {
    const text = 'Hello';
    const component = new TestComponent({ text });

    const spanText = component
      .getContent()
      ?.querySelector('#test-text')?.textContent;

    expect(spanText).to.be.eq(text);
  });

  it('should have a correct class in main element for current component', () => {
    const text = 'Hello';
    const component = new TestComponent({ text });

    const element = component.getContent();
    const hasTestedClass = element?.classList.contains('test-element');

    expect(hasTestedClass).to.be.true;
  });

  it('should emit componentDidMount event', function () {
    const text = 'Hello';
    const component = new TestComponent({ text });

    const spyDidMount = sinon.spy(component, 'componentDidMount');
    component.dispatchComponentDidMount();
    expect(spyDidMount.calledOnce).to.be.true;
  });

  it('should register and emit DOM events', function () {
    const handlerEventStube = sinon.stub();

    const text = 'Hello';
    const component = new TestComponent({
      text,
      events: { click: handlerEventStube },
    });

    const event = new MouseEvent('click');
    component.getContent()?.dispatchEvent(event);

    expect(handlerEventStube.calledOnce).to.be.true;
  });

  it('should be reactive', function () {
    const text = 'Hello';
    const newText = 'Hello World!';

    const component = new TestComponent({ text });
    component.setProps({ text: newText });

    const elementText = component
      .getContent()
      ?.querySelector('#test-text')?.textContent;

    expect(elementText).to.equal(newText);
  });
});

import Component from '../../core/component';
import Button from '../button';

import type { ModalProps } from './interface';

import { template } from './modal.tmpl';

class Modal extends Component {

  constructor(props: ModalProps) {
    super('div', {
      ...props,

      class: 'modal',
      headline: props.headline,
      isVisible: false,

      submitButton: new Button({
        text: props.buttonText,
        type: 'submit',
      }),

      events: {
        submit: (event: Event) => {
          event.preventDefault();

          props.onSubmit(event);
          this.setProps({ isVisible: false });
        },
        click: (event: Event) => {
          event.stopPropagation();

          const element = event.target as HTMLElement;
          if (!element) {
            return;
          }

          const isOverlayClick = element.classList.value === 'modal__overlay';

          if (isOverlayClick) {
            this.setProps({ isVisible: false });
            return;
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }
}

export default Modal;

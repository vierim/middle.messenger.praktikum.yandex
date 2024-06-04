import { Component } from '../../core/component';
import { Props } from '../../core/component/types';
import { template } from './button.tmpl';

export class Button extends Component {
  constructor(props?: Props) {
    super('button', { ...props, class: 'btn' });
  }

  render() {
    return this.compile(template, { 
      text: this._props.text,
    });
  }
}

import { Component } from '../../core/component';
import { template } from './button.tmpl';

export class Button extends Component {
  constructor(props?: any) {
    super('button', { ...props, class: 'btn' });
  }

  render() {
    return this.compile(template, { 
      text: this._props.text,
    });
  }
}

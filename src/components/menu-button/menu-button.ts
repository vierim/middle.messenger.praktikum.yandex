import Handlebars from 'handlebars';
import { Component } from '../../core/component';
import { template } from './menu-button.tmpl';

export class MenuButton extends Component {
  constructor(props?: any) {
    super('button', { 
      ...props, 
      class: 'menu-button' 
    });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

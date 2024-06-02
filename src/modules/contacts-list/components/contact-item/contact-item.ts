import Handlebars from 'handlebars';
import { Component } from '../../../../core/component';
import { template } from './contact-item.tmpl';

export class ContactsItem extends Component {
  constructor(props?: any) {
    super('div', {
      ...props,
      class: 'contact-item',
    });

    
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

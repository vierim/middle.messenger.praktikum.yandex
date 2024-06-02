import Handlebars from 'handlebars';
import { Component } from '../../../../core/component';
import { template } from './contact-item.tmpl';
import { Props } from '../../../../core/component/types';

export class ContactsItem extends Component {
  constructor(props?: Props) {
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

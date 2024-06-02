import { Component } from '../../core/component';
import ContactsItem from './components/contact-item';
import { template } from './contacts-list.tmpl';

export class ContactsList extends Component {
  constructor(props?: any) {
    super('div', {
      ...props,
      class: 'contacts',
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
    });
  }
}

import { Component } from '../../core/component';
import { Props } from '../../core/component/types';
import { template } from './contacts-list.tmpl';

export class ContactsList extends Component {
  constructor(props?: Props) {
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

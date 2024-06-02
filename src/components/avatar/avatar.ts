import Handlebars from 'handlebars';
import { Component } from '../../core/component';
import { template } from './avatar.tmpl';

export class Avatar extends Component {
  constructor(props?: any) {
    super('div', { ...props, class: 'avatar' });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

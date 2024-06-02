import Handlebars from 'handlebars';
import { Component } from '../../core/component';
import { template } from './avatar.tmpl';
import { Props } from '../../core/component/types';

export class Avatar extends Component {
  constructor(props?: Props) {
    super('div', { ...props, class: 'avatar' });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

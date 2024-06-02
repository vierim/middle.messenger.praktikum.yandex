import Handlebars from 'handlebars';
import { Component } from '../../core/component';
import { template } from './input.tmpl';

import './input.scss';

export default class Input extends Component {
  constructor(props: any) {
    super('div', { ...props, class: 'input' });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

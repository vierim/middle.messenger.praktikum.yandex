import Handlebars from 'handlebars';
import { Component } from '../../core/component';
import { template } from './char.tmpl';
import { Props } from '../../core/component/types';

export class Char extends Component {
  constructor(props: Props) {
    super('div', { ...props, class: 'char' });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

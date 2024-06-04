import Handlebars from 'handlebars';
import { Component } from '../../core/component';
import { template } from './input.tmpl';
import { Props } from '../../core/component/types';
import './input.scss';

export default class Input extends Component {
  constructor(props: Props) {
    super('div', { ...props, class: 'input' });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

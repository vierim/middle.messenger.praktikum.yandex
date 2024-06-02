import Handlebars from 'handlebars';
import { Component } from '../../core/component';
import { template } from './search-bar.tmpl';
import { Props } from '../../core/component/types';

export class SearchBar extends Component {
  constructor(props?: Props) {
    super('div', {
      ...props,
      class: 'search-bar',
    });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

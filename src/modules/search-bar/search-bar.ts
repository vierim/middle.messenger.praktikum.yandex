import Handlebars from 'handlebars';
import Component, { Props } from '../../core/component';

import { template } from './search-bar.tmpl';

export class SearchBar extends Component {
  
  constructor(props?: Props) {
    super('div', {
      ...props,
      class: 'search-bar',
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

import Handlebars from 'handlebars';
import Component, { Props } from '../../core/component';

import { template } from './menu-button.tmpl';

export class MenuButton extends Component {

  constructor(props?: Props) {
    super('button', {
      ...props,
      class: 'menu-button',
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

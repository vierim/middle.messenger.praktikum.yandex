import Handlebars from 'handlebars';
import Component, { Props } from '../../core/component';

import { template } from './button.tmpl';

export class Button extends Component {

  constructor(props: Props) {
    super('button', {
      ...props,
      class: props.class ?? 'btn',
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

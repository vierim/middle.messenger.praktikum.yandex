import Handlebars from 'handlebars';
import Component, { Props } from '../../core/component';

import { template } from './input.tmpl';

export default class Input extends Component {

  constructor(props: Props) {
    super('div', {
      ...props,
      class: 'input',
      isFileInput: props.type === 'file',
      validity: true,
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

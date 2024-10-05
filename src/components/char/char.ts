import Handlebars from 'handlebars';
import Component, { Props } from '../../core/component';

import { template } from './char.tmpl';

class Char extends Component {
  
  constructor(props: Props) {
    super('div', { ...props, class: 'char' });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

export default Char;

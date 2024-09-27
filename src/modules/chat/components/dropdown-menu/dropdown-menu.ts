import Component, { Props } from '../../../../core/component';

import { template } from './dropdown-menu.tmpl';

export class DropdownMenu extends Component {

  constructor(props?: Props) {
    super('div', {
      ...props,
      
      class: 'dropdown-menu',
      isActive: false,

      events: {
        click: () => {
          this.setProps({ isActive: !this._props.isActive })
        }
      }
    });
  }

  render() {
    return this.compile(template, {
      ...this._props,
      ...this._children,
    });
  }
}

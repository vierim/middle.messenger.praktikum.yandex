import { Component } from '../../core/component';
import { MenuButton } from '../../components';
import { template } from './chat.tmpl';

export class Chat extends Component {
  constructor(props?: any) {
    super('div', {
      ...props,
      class: 'chat',
    });
  }

  render() {
    return this.compile(template, {
      menuButton: new MenuButton(),
    });
  }
}

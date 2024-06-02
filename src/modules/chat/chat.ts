import { Component } from '../../core/component';
import { MenuButton } from '../../components';
import { template } from './chat.tmpl';
import { Props } from '../../core/component/types';

export class Chat extends Component {
  constructor(props?: Props) {
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

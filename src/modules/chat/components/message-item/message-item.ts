import Handlebars from 'handlebars';
import Component from '../../../../core/component';

import type { MessageItemProps } from './interface';

import { template } from './message-item.tmpl';

class MessageItem extends Component {
  
  constructor(props: MessageItemProps) {
    super('li', {
      ...props,
      class: 'conversation__item',
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

export default MessageItem;

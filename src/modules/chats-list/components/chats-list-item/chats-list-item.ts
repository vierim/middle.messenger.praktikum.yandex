import Handlebars from 'handlebars';
import Component from '../../../../core/component';

import type { ChatsListItemProps } from './interface';

import { template } from './chats-list-item.tmpl';
import { chatController } from '../../../../controllers';

class ChatsListItem extends Component {
  constructor(props: ChatsListItemProps) {
    super('li', {
      ...props,

      class: 'contact-item',

      events: {
        click: () => {
          this.handleClick(props.id);
        },
      },
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }

  async handleClick(chatId: number) {
    chatController.setActiveChat(chatId);
  }
}

export default ChatsListItem;

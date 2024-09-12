import Handlebars from 'handlebars';
import Component, { Props } from '../../../../core/component';

import ChatApi from '../../../../api/chat-api';
import store from '../../../../services/store';

import { template } from './contact-item.tmpl';

class ContactsItem extends Component {
  
  constructor(props?: Props) {
    super('li', {
      ...props,
      class: 'contact-item',
      events: {
        click: () => handleClick(props?.id),
      },
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

export default ContactsItem;

async function handleClick(chatId: number) {
  const chatsService = new ChatApi();
  const data = await chatsService.getChatTokenRequest(chatId);

  store.set('activeChat', {
    ...store.get().chats.filter((item) => item.id === chatId)[0],
    token: data.token,
  });
}

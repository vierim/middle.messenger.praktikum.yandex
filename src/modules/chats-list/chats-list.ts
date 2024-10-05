import Component, { Props } from '../../core/component';
import { connect } from '../../core/store';

import { chatController } from '../../controllers';
import store, { AppState } from '../../services/store';

import { Button, Input, Modal } from '../../components';
import ChatsListItem from './components/chats-list-item';

import { template } from './chats-list.tmpl';

const addChatModal = new Modal({
  headline: 'Добавление нового чата',
  buttonText: 'Добавить',
  formFields: [
    new Input({
      label: 'Название чата',
        name: 'name',
        type: 'text',
    }),
  ],
  onSubmit: (event: Event) => {
    event.preventDefault();
    handleAddChatSubmit(event);
  },
});

class ChatsList extends Component {
  constructor(props?: Props) {
    super('div', {
      ...props,
      class: 'contacts',

      addChatModal,

      addChatBtn: new Button({
        text: 'Создать новый чат',
        class: 'contacts__add-button',
        events: {
          click: () => {
            addChatModal.setProps({ isVisible: true });
          },
        }
      }),
    });
  }

  render() {
    return this.compile(template, {
      ...this._props,
      ...this._children,
    });
  }
}

export default connect(store, ChatsList, mapStateToProps);

function mapStateToProps(state: AppState) {
  const currentChat = state.activeChat?.id;

  const chatItems = state.chats.map(({ id, ...rest }) => {
    const item = {
      id,
      isActive: id === currentChat,
      ...rest,
    };

    return new ChatsListItem(item);
  });

  return { items: chatItems };
}

async function handleAddChatSubmit(event: Event) {
  const messageForm = event.target as HTMLFormElement;
  const { value } = messageForm.querySelector('#name') as HTMLInputElement;

  await chatController.createNewChat(value);

  messageForm.reset();
}

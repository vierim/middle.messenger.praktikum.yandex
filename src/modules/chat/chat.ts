import Component, { Props } from '../../core/component';
import { connect } from '../../core/store';
import WebSocketTransport from '../../core/websocket-transport';

import { chatController } from '../../controllers';
import store, { AppState } from '../../services/store';

import Notification from '../notification';
import { Button, Input, Modal } from '../../components';

import DropdownMenu from './components/dropdown-menu';
import MessageForm from './components/message-form';
import MessagesList from './components/messages-list';

import { template } from './chat.tmpl';

const addUserModal = new Modal({
  headline: 'Добавить пользователя',
  buttonText: 'Добавить',
  formFields: [
    new Input({
      label: 'Логин',
      name: 'login',
      type: 'text',
    }),
  ],
  onSubmit: (event: Event) => {
    event.preventDefault();
    handleAddUserSubmit(event);
  },
});

const removeUserModal = new Modal({
  headline: 'Удалить пользователя',
  buttonText: 'Удалить',
  formFields: [
    new Input({
      label: 'Логин',
      name: 'login',
      type: 'text',
    }),
  ],
  onSubmit: handleRemoveUserFormSubmit,
});

const addUserButton = new Button({
  text: 'Добавить пользователя',
  type: 'button',
  class: 'chat__controls-btn chat__controls-btn_type_add-user',
  events: {
    click: () => {
      addUserModal.setProps({ isVisible: true });
    },
  },
});

const deleteUserButton = new Button({
  text: 'Удалить пользователя',
  type: 'button',
  class: 'chat__controls-btn chat__controls-btn_type_remove-user',
  events: {
    click: () => {
      removeUserModal.setProps({ isVisible: true });
    },
  },
});

const deleteChatButton = new Button({
  text: 'Удалить чат',
  type: 'button',
  class: 'chat__controls-btn chat__controls-btn_type_remove-chat',
  events: {
    click: handleRemoveChatButtonClick,
  },
});

class Chat extends Component {
  private _socket?: WebSocketTransport;

  constructor(props?: Props) {
    super('div', {
      ...props,

      class: 'chat',
      current: null,

      addUserModal,
      removeUserModal,

      dropdownMenu: new DropdownMenu({
        controls: [addUserButton, deleteUserButton, deleteChatButton],
      }),
      messages: new MessagesList(),
      messageForm: new MessageForm({
        events: {
          submit: (event: Event) => {
            handleMessageFormSubmit(event, this._socket);
          },
        },
      }),
      notification: new Notification(),
    });
  }

  render() {
    return this.compile(template, {
      ...this._props,
      ...this._children,
    });
  }

  componentDidUpdate(oldProps?: Props, newProps?: Props): boolean {
    if (oldProps?.current !== newProps?.current) {
      const userId = store.get().user?.id;
      const chatId = store.get().activeChat?.id;
      const token = store.get().activeChat?.token;

      this._socket = new WebSocketTransport(
        `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,
        store
      );
    }

    return true;
  }
}

export default connect(store, Chat, mapStateToProps);

function mapStateToProps(state: AppState) {
  return { current: { ...state.activeChat } };
}

const handleMessageFormSubmit = (event: Event, socket?: WebSocketTransport) => {
  event.preventDefault();

  if(!socket) {
    return;
  }
  
  const messageForm = event.target as HTMLFormElement;

  const inputElement = messageForm.querySelector(
    '.message-form__input'
  ) as HTMLInputElement;

  socket?.sendMessage(inputElement.value);
  messageForm.reset();
};

async function handleRemoveUserFormSubmit(event: Event) {
  const formElement = event.target as HTMLFormElement;

  const { value } = formElement.querySelector('#login') as HTMLInputElement;

  await chatController.removeUserFromCurrentChat(value);
  formElement.reset();
}

async function handleAddUserSubmit(event: Event) {
  const formElement = event.target as HTMLFormElement;

  const { value } = formElement.querySelector('#login') as HTMLInputElement;

  await chatController.addUserToCurrentChat(value);
  formElement.reset();
}

async function handleRemoveChatButtonClick() {
  const chatId = store.get().activeChat?.id;

  if(!chatId) {
    return;
  }

  await chatController.removeCurrentChat(chatId);
}

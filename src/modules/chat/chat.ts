import Component, { Props } from '../../core/component';
import { MenuButton } from '../../components';

import { template } from './chat.tmpl';
import { connect } from '../../core/store';
import store, { AppState } from '../../services/store';
import MessageForm from './components/message-form';

class Chat extends Component {
  private _socket?: WebSocketTransport;

  constructor(props?: Props) {
    super('div', {
      ...props,

      messageForm: new MessageForm({
        events: {
          submit: (event: Event) => {
            handleMessageFormSubmit(event, this._socket);
          },
        },
      }),

      class: 'chat',
      current: null,
      messages: [],
    });
  }

  render() {
    console.warn(`\n Render Chat component.`);
    console.log({ props: this._props });

    return this.compile(template, {
      menuButton: new MenuButton(),
      current: this._props?.current,
    });
  }

  componentDidUpdate(oldProps?: Props, newProps?: Props): boolean {
    if (oldProps?.current !== newProps?.current) {
      const userId = store.get().user?.id;
      const chatId = store.get().activeChat?.id;
      const token = store.get().activeChat?.token;

      this._socket = new WebSocketTransport(
        `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
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

  console.log(event.target);
  console.log(socket);

  socket?.sendMessage('message X');
};

class WebSocketTransport {
  private _socket!: WebSocket;
  private _timerId?: number;

  constructor(url: string) {
    this._socket = new WebSocket(url);

    this._setTimer = this._setTimer.bind(this);
    this._sendPingMsg = this._sendPingMsg.bind(this);

    this._setListeners();
    this._setTimer();
  }

  _setListeners() {
    this._socket.addEventListener('open', () => {
      console.log('Соединение установлено');
      console.log(this._socket);
    });

    this._socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      clearTimeout(this._timerId);

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this._socket.addEventListener('message', (event) => {
      
      const message = JSON.parse(event.data);
      
      if (message.type !== 'pong') {
        console.log('Получены данные', event.data);
        console.log({ message });
      }
    });

    this._socket.addEventListener('error', (event) => {
      console.log('Ошибка', event.message);
    });
  }

  _setTimer(delay = 5000) {
    this._timerId = setTimeout(() => {
      this._sendPingMsg();
      this._setTimer();
    }, delay);
  }

  _sendPingMsg() {
    this._socket.send(
      JSON.stringify({
        type: 'ping',
      })
    );
  }

  sendMessage(text: string) {
    this._socket.send(
      JSON.stringify({
        content: text,
        type: 'message',
      })
    );
  }
}

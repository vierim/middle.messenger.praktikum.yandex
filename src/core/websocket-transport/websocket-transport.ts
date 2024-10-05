import { AppState } from "../../services/store";
import type { StoreInterface } from "../store";

class WebSocketTransport {
  private static __instance: WebSocketTransport;

  private _socket!: WebSocket;
  private _timerId?: number;
  private _store: StoreInterface<AppState>;

  constructor(url: string, store: StoreInterface<AppState>) {
    if (WebSocketTransport.__instance) {
      WebSocketTransport.__instance._socket.close();
    }

    this._socket = new WebSocket(url);
    this._store = store;

    this._setTimer = this._setTimer.bind(this);
    this._sendPingMessage = this._sendPingMessage.bind(this);

    this._setListeners();
    this._setTimer();

    WebSocketTransport.__instance = this;
  }

  _setListeners() {
    this._socket.addEventListener('open', () => {
      this.getOldMessages();
    });

    this._socket.addEventListener('close', (event) => {
      if (!event.wasClean) {
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      }

      clearTimeout(this._timerId);
    });

    this._socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);

      if (message.type !== 'pong') {

        if (Array.isArray(message)) {
          const currentUserId = this._store.get().user?.id;

          const formatedMessages = message.map((item) => {
            return {
              ...item,
              direction:
                item.user_id === currentUserId ? 'outgoing' : 'incoming',
            };
          });

          formatedMessages.sort((a, b) => {
            const aTime = new Date(a.time);
            const bTime = new Date(b.time);

            if (aTime > bTime) return 1;
            if (aTime < bTime) return -1;

            return 0;
          });

          this._store.set('messages', formatedMessages);
        } else {

          const currentUserId = this._store.get().user?.id;
          const formatedMessage = {
            ...message,
            direction:
              message.user_id === currentUserId ? 'outgoing' : 'incoming',
          };

          const oldMessages = this._store.get().messages;
          oldMessages.push(formatedMessage);
          this._store.set('messages', oldMessages);
        }
      }
    });

    this._socket.addEventListener('error', () => {
      console.error('WebSocketTransport error');
    });
  }

  _setTimer(delay = 5000) {
    this._timerId = setTimeout(() => {
      this._sendPingMessage();
      this._setTimer();
    }, delay);
  }

  _sendPingMessage() {
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

  getOldMessages(ofset = 0) {
    this._socket.send(
      JSON.stringify({
        content: ofset,
        type: 'get old',
      })
    );
  }
}

export default WebSocketTransport;

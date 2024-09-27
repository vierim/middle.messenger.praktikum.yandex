import { ChatAPI } from '../api';
import store from '../services/store';
import { errorHandler } from '../utils/error-handler';
import { formatDate } from '../utils/format-date';
import userController from './user-controller';

class ChatController {
  private readonly _api: ChatAPI;

  constructor() {
    this._api = new ChatAPI();
  }

  async getAllChats() {
    try {
      const chats = await this._api.getAllChats();

      const formatedChats = chats.map((item) => {
        if (item.last_message) {
          const time = item.last_message.time;
          item.last_message.time = formatDate(time as Date);
        }

        return item;
      });

      store.set('chats', formatedChats);
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async getChatToken(chatId: number) {
    try {
      const { token } = await this._api.getChatTokenRequest(chatId);

      return token;
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async setActiveChat(chatId: number) {
    const currentChatid = store.get().activeChat?.id;

    if (chatId === currentChatid) {
      return;
    }

    const token = await this.getChatToken(chatId);

    const activeChatData = store
      .get()
      .chats.filter((item) => item.id === chatId)[0];

    store.set('activeChat', {
      ...activeChatData,
      token,
    });
  }

  async addUserToCurrentChat(login: string) {
    const currentChatId = store.get().activeChat?.id;

    if (!currentChatId) {
      return;
    }

    const newUserId = await userController.searchUserByLogin(login);
    const data = {
      users: [newUserId],
      chatId: currentChatId,
    };

    await this._api.addUserToChatRequest(data);
  }
}

export default new ChatController();

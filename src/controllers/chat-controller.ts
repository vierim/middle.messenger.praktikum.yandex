import { ChatAPI } from '../api';
import store from '../services/store';
import userController from './user-controller';
import { errorHandler } from '../utils/error-handler';
import { formatDate } from '../utils/format-date';

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
      // debugger
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

  async createNewChat(title: string) {
    try {
      await this._api.createChatRequest({ title });
      await this.getAllChats();
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async addUserToCurrentChat(login: string) {
    try {
      const currentChatId = store.get().activeChat?.id;

      if (!currentChatId) {
        return;
      }

      const searchRequest = await userController.searchUserByLogin(login);
      if (searchRequest && searchRequest.length > 0) {
        const newUserId = searchRequest[0].id;

        const data = {
          users: [newUserId],
          chatId: currentChatId,
        };

        await this._api.addUserToChatRequest(data);
      }
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async removeUserFromCurrentChat(login: string) {
    try {
      const currentChatId = store.get().activeChat?.id;

      if (!currentChatId) {
        return;
      }

      const searchRequest = await userController.searchUserByLogin(login);
      if (searchRequest && searchRequest.length > 0) {
        const userId = searchRequest[0].id;

        const data = {
          users: [userId],
          chatId: currentChatId,
        };

        await this._api.deleteUserFromChatRequest(data);
      }
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async removeCurrentChat(chatId: number) {
    try {
      await this._api.deleteChatRequest({ chatId });
      await this.getAllChats();
    } catch (error: unknown) {
      errorHandler(error);
    }
  }
}

export default new ChatController();

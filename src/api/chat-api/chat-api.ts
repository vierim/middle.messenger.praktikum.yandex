import HttpRequest from "../../core/http-request";

import type { RequestEngine } from "../../core/http-request";
import type { ChatItem } from "../../entities/chat";
import type { ChatTokenResponse } from "./interface";

export default class ChatAPI {
  private _apiInstance: RequestEngine;

  constructor() {
    this._apiInstance = new HttpRequest('/api/v2/chats');
  }

  async getAllChats(): Promise<ChatItem[]> {
    try {
      const response = await this._apiInstance.get('');
      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async createChatRequest(data: any) {
    try {
      const response = await this._apiInstance.post('', data);
      return response.json();
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async addUserToChatRequest(data: any) {
    try {
      const response = await this._apiInstance.put('/users', data);
      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async deleteUserFromChatRequest(data: any) {
    try {
      const response = await this._apiInstance.delete('/users', data);
      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async getChatUsersRequest(id: number) {
    try {
      const response = await this._apiInstance.get(`/${id}/users`);
      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async getChatTokenRequest(id: number): Promise<ChatTokenResponse> {
    try {
      const response = await this._apiInstance.post(`/token/${id}`);
      return response.json();
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async getChatUsers(id: number): any {
    try {
      const response = await this._apiInstance.get(`/${id}/users`);
      console.log(response)
      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async deleteChatRequest(data: any): any {
    try {
      const response = await this._apiInstance.delete('', data);
      return response;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }
}

import HttpRequest from '../../core/http-request';

import type { RequestEngine } from '../../core/http-request';
import type {
  addUserToChatRequest,
  ChatTokenResponse,
  CreateNewChatRequest,
  CreateNewChatResponse,
  DeleteChatRequest,
  DeleteChatResponse,
  DeleteUserFromChatRequest,
  GetAllChatsResponse,
  GetChatUserResponse,
} from './interface';

export default class ChatAPI {
  private _apiInstance: RequestEngine;

  constructor() {
    this._apiInstance = new HttpRequest('/api/v2/chats');
  }

  async getAllChats(): Promise<GetAllChatsResponse> {
    try {
      const response = (await this._apiInstance.get('')) as GetAllChatsResponse;
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

  async createChatRequest(
    data: CreateNewChatRequest
  ): Promise<CreateNewChatResponse> {
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

  async addUserToChatRequest(data: addUserToChatRequest) {
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

  async deleteUserFromChatRequest(data: DeleteUserFromChatRequest) {
    try {
      await this._apiInstance.delete('/users', data);
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

  async getChatUsers(id: number): Promise<GetChatUserResponse> {
    try {
      const response = await this._apiInstance.get(`/${id}/users`) as GetChatUserResponse;

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

  async deleteChatRequest(
    data: DeleteChatRequest
  ): Promise<DeleteChatResponse> {
    try {
      const response = await this._apiInstance.delete('', data);

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
}

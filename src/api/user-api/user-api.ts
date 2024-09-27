import HttpRequest from '../../core/http-request';

import type { RequestEngine } from '../../core/http-request';
import { UserData } from '../../entities/user';
import type {
  SearchUserByLoginRequest,
  SearchUserByLoginResponse,
  SetUserProfileDataResponse,
  UpdatePasswordRequest,
} from './interface';

export default class UserAPI {
  private _apiInstance: RequestEngine;

  constructor() {
    this._apiInstance = new HttpRequest('/api/v2/user');
  }

  async setUserProfileData(
    data: UserData
  ): Promise<SetUserProfileDataResponse> {
    try {
      const request = await this._apiInstance.put('/profile', data);
      const updatedData = await request.json();

      return updatedData;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async updateUserPassword(data: UpdatePasswordRequest): Promise<unknown> {
    try {
      const request = await this._apiInstance.put('/password', data);

      return request;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async updateUserAvatar(form: FormData) {
    try {
      const request = await this._apiInstance.putFormData(
        '/profile/avatar',
        form
      );
      const updatedData = await request.json();

      return updatedData;
    } catch (error: unknown) {
      if (error instanceof Response) {
        const { reason } = await error.json();
        throw new Error(reason);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async searchUserByLogin(
    login: SearchUserByLoginRequest
  ): Promise<SearchUserByLoginResponse> {
    try {
      const request = await this._apiInstance.post('/search', login);
      const result = await request.json();

      return result;
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

import HttpRequest from '../../core/http-request';

import type { RequestEngine } from '../../core/http-request';
import { UserData, UserInfo } from '../../entities/user';
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
      const response = (await this._apiInstance.put(
        '/profile',
        data
      )) as SetUserProfileDataResponse;

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async updateUserPassword(data: UpdatePasswordRequest): Promise<unknown> {
    try {
      const response = await this._apiInstance.put('/password', data);

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async updateUserAvatar(form: FormData): Promise<UserInfo> {
    try {
      const response = (await this._apiInstance.putFormData(
        '/profile/avatar',
        form
      )) as UserInfo;

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }

  async searchUserByLogin(
    login: SearchUserByLoginRequest
  ): Promise<SearchUserByLoginResponse[]> {
    try {
      const response = (await this._apiInstance.post(
        '/search',
        login
      )) as SearchUserByLoginResponse[];

      return response;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('Unexpected error');
      }
    }
  }
}

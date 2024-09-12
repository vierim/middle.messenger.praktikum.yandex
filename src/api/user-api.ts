import HttpRequest from "../core/http-request";

import type { RequestEngine } from "../core/http-request";

export default class UserAPI {
  private _apiInstance: RequestEngine;

  constructor() {
    this._apiInstance = new HttpRequest('/api/v2/user');
  }

  async setUserProfileData(data: any) {
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

  async updateUserPassword(data: any) {
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

  async updateUserAvatar(form: any) {

    try {
      const request = await this._apiInstance.putFormData('/profile/avatar', form);
      console.log(request);

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

  async logout() {
  }
}

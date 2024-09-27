import { UserAPI } from '../api';
import router from '../services/router';
import store from '../services/store';
import { errorHandler } from '../utils/error-handler';
import type { UserData } from '../entities/user';
import type { UpdatePasswordRequest } from '../api/user-api/interface';

class UserController {
  private readonly _api: UserAPI;

  constructor() {
    this._api = new UserAPI();
  }

  async updateUserData(data: UserData) {
    try {
      const userData = await this._api.setUserProfileData(data);
      store.set('user', userData);
      router.navigate('/settings');
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async updatePassword(data: UpdatePasswordRequest) {
    try {
      await this._api.updateUserPassword(data);
      router.navigate('/settings');
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async updateUserAvatar(form: HTMLFormElement) {
    const data = new FormData(form);

    try {
      const newUserData = await this._api.updateUserAvatar(data);
      store.set('user', newUserData);
    } catch (error: unknown) {
      errorHandler(error);
    }
  }

  async searchUserByLogin(login: string) {
    try {
      const searchRequest = await this._api.searchUserByLogin({
        login,
      });

      return searchRequest[0].id;
    } catch (error: unknown) {
      errorHandler(error);
    }
  }
}

export default new UserController();

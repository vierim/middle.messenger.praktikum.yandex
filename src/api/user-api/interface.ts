import type { UserInfo } from "../../entities/user";

export type UpdatePasswordRequest = {
  oldPassword: string;
  newPassword: string;
};

export type SearchUserByLoginRequest = {
  login: string;
};

export type SearchUserByLoginResponse = Omit<UserInfo, 'email' | 'phone'>;

export type SetUserProfileDataResponse = Omit<UserInfo, 'id' | 'avatar'>;

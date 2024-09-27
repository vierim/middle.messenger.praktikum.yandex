export type UserInfo = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string;
  email: string;
};

export type UserData = Omit<UserInfo, 'id' | 'avatar'>;

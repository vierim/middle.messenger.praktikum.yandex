import Store from '../core/store';

import type { UserInfo } from '../entities/user';
import type { ChatItem } from '../entities/chat';

export type AppState = {
  isAuth: boolean;
  user: UserInfo | null;
  chats: ChatItem[];
  activeChat: ChatItem | null;
};

const initialState: AppState = {
  isAuth: false,
  user: null,
  chats: [],
  activeChat: null,
};

const store = new Store(initialState);

export default store;

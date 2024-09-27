import Store from '../core/store';

import type { UserInfo } from '../entities/user';
import type { ChatItem } from '../entities/chat';
import type { Message } from '../entities/message';

export type AppState = {
  isAuth: boolean;
  user: UserInfo | null;
  chats: ChatItem[];
  activeChat: ChatItem | null;
  messages: Message[];
  hasErrorEvent?: boolean;
  errorMessage?: string;
};

const initialState: AppState = {
  isAuth: false,
  user: null,
  chats: [],
  activeChat: null,
  messages: [],
  hasErrorEvent: false,
  errorMessage: '',
};

const store = new Store(initialState);

export default store;

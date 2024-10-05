import type { ChatItem } from '../../entities/chat';

export type ChatTokenResponse = {
  token: string;
};

export type DeleteUserFromChatRequest = {
  users: number[];
  chatId: number;
};

export type GetAllChatsResponse = ChatItem[];

export type CreateNewChatRequest = {
  title: string;
};

export type CreateNewChatResponse = {
  id: string;
};

export type addUserToChatRequest = {
  users: number[];
  chatId: number;
};

export type DeleteChatRequest = {
  chatId: number;
};

export type DeleteChatResponse = {
  userId: number;
  result: {
    id: number;
    title: string;
    avatar: string;
    created_by: number;
  };
};

export type GetChatUserResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: string;
  role: string;
};

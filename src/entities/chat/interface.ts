export type ChatItem = {
  id: number;
  token?: string;
  created_by: number;
  avatar: string | null;
  last_message: LastMessage | null;
  title: string;
  unread_count: number;
};

export type LastMessage = {
  content: string;
  id: number;
  time: Date | string;
  user: {
    avatar: string | null;
    display_name: string | null;
    first_name: string;
    login: string;
    second_name: string;
  };
};

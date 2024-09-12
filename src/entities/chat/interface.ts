export type ChatItem = {
  id: number;
  token?: string;
  created_by: number;
  avatar: string | null;
  last_message: string | null;
  title: string;
  unread_count: number;
};

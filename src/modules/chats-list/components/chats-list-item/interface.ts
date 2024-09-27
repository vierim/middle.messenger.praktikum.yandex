import type { Props } from "../../../../core/component";
import type { ChatItem } from "../../../../entities/chat";

export type ChatsListItemProps = Props & ChatItem & {
  isActive: boolean;
};

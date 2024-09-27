import { Props } from "../../../../core/component";

export type MessageItemProps = Props & {
  content: string,
  incoming: boolean,
};

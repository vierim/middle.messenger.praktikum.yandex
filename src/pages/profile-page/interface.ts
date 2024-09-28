import { Props } from "../../core/component";
import { UserData } from "../../entities/user";

export type ProfilePageProps = Props & {
  user: UserData;
};

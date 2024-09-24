import { Props } from "../../core/component";

export type ProfilePageProps = Props & {
  user: {
    email: string;
    first_name: string;
    second_name: string;
    phone: string;
    login: string;
    display_name: string;
  };
};

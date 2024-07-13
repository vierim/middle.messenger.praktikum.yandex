import Store from '../core/store';

export type AppState = {
  isAuth: boolean;
  user: {
    id?: number;
    first_name?: string;
    second_name?: string;
    display_name?: string;
    phone?: string;
    login?: string;
    avatar?: string;
    email?: string;
  };
};

const initialState: AppState = {
  isAuth: false,
  user: {},
};

const store = new Store(initialState);

export default store;

export type SignUpRequestData = {
  email: string;
  first_name: string;
  second_name: string;
  phone: string;
  login: string;
  password: string;
};

export type SignInRequestData = {
  login: string;
  password: string;
};

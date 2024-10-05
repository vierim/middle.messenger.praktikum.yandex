export type SignUpRequest = {
  email: string;
  first_name: string;
  second_name: string;
  phone: string;
  login: string;
  password: string;
};

export type SignInRequest = {
  login: string;
  password: string;
};

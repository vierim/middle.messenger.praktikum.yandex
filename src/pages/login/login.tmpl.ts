import './login.scss';

export const template = `
  <div class="container">
    <h1 class="container__headline">
      {{ headline }}
    </h1>

    {{> login-form }}
  </div>
`;

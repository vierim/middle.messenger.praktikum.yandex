import './login-page.scss';

export const template = `
  <div class="container">
    <h1 class="container__headline">
      {{ headline }}
    </h1>
  
    <form class="login-form" novalidate>
      {{{ login }}}
      {{{ password }}}

      <div class="login-form__controls">
        {{{ button }}}

        <a href="/registration" class="login-form__link">
          Нет аккаунта?
        </a>
      </div>
    </form>
  </div>
`;

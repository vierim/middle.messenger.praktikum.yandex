import './login-form.scss';

export const template = `
  <form class="login-form">
    {{> input 
          label="Логин"
          name="login" 
          type="text" 
    }}
    {{> input 
          label="Пароль" 
          name="password" 
          type="password" 
    }}

    <div class="login-form__controls">
      {{> button name="Войти" }}

      <a href="/registration" class="login-form__link">
        Нет аккаунта?
      </a>
    </div>
  </form>
`;

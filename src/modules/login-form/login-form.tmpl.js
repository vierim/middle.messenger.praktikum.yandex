import './login-form.scss';

export const template = `
  <form class="form">
    {{> input 
          title="Логин"
          name="login" 
          type="text" 
    }}
    {{> input 
          title="Пароль" 
          name="pass" 
          type="password" 
    }}

    <div class="form__controls">
      {{> button name="Авторизоваться" }}
      <a
        href="#"
        class="form__link"
      >
        Нет аккаунта?
      </a>
    </div>
  </form>
`;

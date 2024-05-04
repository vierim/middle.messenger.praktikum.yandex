import './registration-form.scss';

export const template = `
  <form class="registration-form">
    {{> input 
          label="Почта"
          name="email" 
          type="email" 
    }}
    {{> input 
          label="Логин" 
          name="login" 
          type="text" 
    }}
    {{> input 
          label="Имя" 
          name="first_name" 
          type="text" 
    }}
    {{> input 
          label="Фамилия" 
          name="second_name" 
          type="text" 
          error="Фамилия должна содержать буквы"
    }}
    {{> input 
          label="Телефон" 
          name="phone" 
          type="tel" 
    }}
    {{> input 
          label="Пароль" 
          name="password" 
          type="password" 
    }}
    {{> input 
          label="Пароль (еще раз)" 
          name="repeat-password" 
          type="password"
          error="Пароли не совпадают"
    }}

    <div class="registration-form__controls">
      {{> button name="Зарегистрироваться" }}

      <a href="#" class="registration-form__link">
        Войти
      </a>
    </div>
  </form>
`;

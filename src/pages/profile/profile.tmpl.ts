

import './profile.scss';

export const template = `
  <div class="profile">
    <button class="profile__back-btn"></button>
    <div class="profile__container">
      {{> avatar name="Иван" changeable=true }}
      
      {{#unless isEdit}}
        <h1 class="profile__name">Иван</h1>
      {{/unless}}

      <form name="profile-form" class="profile__form">
        <ul class="chars-list">
          <li class="chars-list__item">
            <label for="email" class="chars-list__name">
              Почта
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              class="chars-list__value" 
              value="pochta@yandex.ru" 
              {{#unless isEdit}}
                disabled
              {{/unless}}
            >
          </li>
          
          <li class="chars-list__item">
            <label for="login" class="chars-list__name">
              Логин
            </label>
            <input 
              type="text" 
              name="login" 
              id="login" 
              class="chars-list__value" 
              value="ivanivanov" 
              {{#unless isEdit}}
                disabled
              {{/unless}}
            >
          </li>

          <li class="chars-list__item">
            <label for="first_name" class="chars-list__name">
              Имя
            </label>
            <input 
              type="text" 
              name="first_name" 
              id="first_name" 
              class="chars-list__value" 
              value="Иван" 
              {{#unless isEdit}}
                disabled
              {{/unless}}
            >
          </li>

          <li class="chars-list__item">
            <label for="second_name" class="chars-list__name">
              Фамилия
            </label>
            <input 
              type="text" 
              name="second_name" 
              id="second_name" 
              class="chars-list__value" 
              value="Иванов" 
              {{#unless isEdit}}
                disabled
              {{/unless}}
            >
          </li>

          <li class="chars-list__item">
            <label for="display_name" class="chars-list__name">
              Имя в чате
            </label>
            <input 
              type="text" 
              name="display_name" 
              id="display_name" 
              class="chars-list__value" 
              value="Иван" 
              {{#unless isEdit}}
                disabled
              {{/unless}}
            >
          </li>

          <li class="chars-list__item">
            <label for="phone" class="chars-list__name">
              Телефон
            </label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              class="chars-list__value" 
              value="+7 (909) 967-30-30" 
              {{#unless isEdit}}
                disabled
              {{/unless}}
            >
          </li>
        </ul>

        
        {{#if isEdit }}
          <div class="profile__controls-btn">
            {{> button name="Сохранить" }}
          </div>
        {{ else }}
          <ul class="profile__controls-list">
            <li class="profile__controls-item">
              <a href="/edit" class="profile__controls-link">
                Изменить данные
              </a>
            </li>
            <li class="profile__controls-item">
              <a href="/password" class="profile__controls-link">
                Изменить пароль
              </a>
            </li>
            <li class="profile__controls-item">
              <a href="#" class="profile__controls-link profile__controls-link_type_exit">
                Выйти
              </a>
            </li>
          </ul>
        {{/if}}

      </form>
    </div>
  </div>
`;

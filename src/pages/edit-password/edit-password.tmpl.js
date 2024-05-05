import noAvatarPic from '../../static/images/noavatar2.svg';

import './edit-password.scss';

export const template = `
  <div class="profile">
    <button class="profile__back-btn"></button>
    <div class="profile__container">
      {{> avatar name="Иван" changeable=true }}

      <ul class="chars-list profile__chars-list">
        <li class="chars-list__item">
          <label for="old-password" class="chars-list__name">
            Старый пароль
          </label>
          <input 
            type="password" 
            name="oldPassword" 
            id="old-password" 
            class="chars-list__value" 
            value="12345" 
          >
        </li>
        
        <li class="chars-list__item">
          <label for="password" class="chars-list__name">
            Новый пароль
          </label>
          <input 
            type="password" 
            name="newPassword" 
            id="password" 
            class="chars-list__value" 
            value="12345678" 
          >
        </li>

        <li class="chars-list__item">
          <label for="repeat-password" class="chars-list__name">
            Повторите пароль
          </label>
          <input 
            type="password" 
            name="repeat-password" 
            id="repeat-password" 
            class="chars-list__value" 
            value="12345678" 
          >
        </li>

        <div class="profile__controls-btn">
          {{> button name="Сохранить" }}
        </div>
    </div>
  </div>
`;

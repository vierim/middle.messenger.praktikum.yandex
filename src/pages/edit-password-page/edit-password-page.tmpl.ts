export const template = `
  <div class="profile">
    <button class="profile__back-btn"></button>
    <div class="profile__container">
      {{{ avatar }}}

      <form name="password-form" class="profile__form" novalidate>
        <ul class="chars-list profile__chars-list">
          <li class="chars-list__item">
            {{{ oldPassword }}}
          </li>
          
          <li class="chars-list__item">
            {{{ newPassword }}}
          </li>

          <li class="chars-list__item">
            {{{ newPasswordRepeat }}}
          </li>
        </ul>

        <div class="profile__controls-btn">
          {{{ button }}}
        </div>
      </form>
    </div>
  </div>
`;

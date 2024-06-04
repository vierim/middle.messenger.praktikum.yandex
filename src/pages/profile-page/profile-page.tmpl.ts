import './profile-page.scss';

export const template = `
  <div class="profile">
    <button class="profile__back-btn"></button>
    <div class="profile__container">
      {{{ avatar }}}
      
      {{#unless isEdit}}
        <h1 class="profile__name">{{ userName }}</h1>
      {{/unless}}

      <form name="profile-form" class="profile__form" novalidate>
        <ul class="chars-list">
          <li class="chars-list__item">
            {{{ email }}}
          </li>
          
          <li class="chars-list__item">
            {{{ login }}}
          </li>

          <li class="chars-list__item">
            {{{ name }}}
          </li>

          <li class="chars-list__item">
            {{{ secondName }}}
          </li>

          <li class="chars-list__item">
            {{{ nick }}}
          </li>

          <li class="chars-list__item">
            {{{ phone }}}
          </li>
        </ul>

        
        {{#if isEdit }}
          <div class="profile__controls-btn">
            {{{ button }}}
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
              <a href="/" class="profile__controls-link profile__controls-link_type_exit">
                Выйти
              </a>
            </li>
          </ul>
        {{/if}}

      </form>
    </div>
  </div>
`;

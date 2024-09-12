import './profile-page.scss';

export const template = `
  <div class="profile">
    {{{ backButton }}}

    <div class="profile__container">
      {{{ avatar }}}
      
      <h1 class="profile__name">{{ user.first_name }}</h1>

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

        <ul class="profile__controls-list">
          <li class="profile__controls-item">
            {{{ editProfilePageLink }}}
          </li>
          <li class="profile__controls-item">
            {{{ editPasswordPageLink }}}
          </li>
          <li class="profile__controls-item">
            {{{ logoutButton }}}
          </li>
        </ul>

      </form>
    </div>
  </div>
`;

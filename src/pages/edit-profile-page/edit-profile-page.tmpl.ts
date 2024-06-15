import './edit-profile-page.scss';

export const template = `
  <div class="profile">
    {{{ backButton }}}

    <div class="profile__container">
      {{{ avatar }}}
      
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

        <div class="profile__controls-btn">
          {{{ button }}}
        </div>

      </form>
    </div>
  </div>
`;

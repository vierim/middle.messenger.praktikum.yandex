import './registration-page.scss';

export const template = `
  <div class="container">
    <h1 class="container__headline">
      {{ headline }}
    </h1>

    <form class="registration-form" novalidate>
      {{{ email }}}
      {{{ login }}}
      {{{ firstName }}}
      {{{ secondName }}}
      {{{ phone }}}
      {{{ password }}}
      {{{ repeatPassword }}}

      <div class="registration-form__controls">
        {{{ button }}}

        {{{ loginPageLink }}}
      </div>
    </form>
  </div>

  {{{ toasterBlock }}}
`;

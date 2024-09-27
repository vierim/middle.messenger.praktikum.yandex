import './dropdown-menu.scss';

export const template = `
  {{#if isActive}}

    <button class="dropdown-menu__button dropdown-menu__button_state_close-button">
      <span></span>
      <span></span>
    </button>

  {{else}}

    <button class="dropdown-menu__button">
      <span></span>
      <span></span>
      <span></span>
    </button>

  {{/if}}


  {{#if isActive}}

    <div class="dropdown-menu__container">
      {{{ controls }}}
    </div>

  {{/if}}
`;

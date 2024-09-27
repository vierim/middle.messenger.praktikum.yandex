import './modal.scss';

export const template = `
  {{#if isVisible}}

    <div class="modal__wrapper">
      <div class="modal__overlay"></div>

      <div class="modal__container">
        <h1 class="modal__headline">
          {{ headline }}
        </h1>

        <form class="modal__form" novalidate>
          <div class="modal__fields-wrapper">
            {{{ formFields }}}
          </div>

          {{{ submitButton }}}
        </form>
          
        <span class="modal__error">{{ errorText }}</span>
      </div>
    </div>

  {{/if}}
`;

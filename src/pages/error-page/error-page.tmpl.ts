import './error-page.scss';

export const template = `
  <div class="error-data">
    <h1 class="error-data__code">
      {{#if code}}
        {{ code }}
      {{ else }}
        520
      {{/if}}
    </h1>
    
    <p class="error-data__text">
      {{#if text}}
        {{ text }}
      {{ else }}
        Unknown Error
      {{/if}}
    </p>

    {{{ backButton }}}
  </div>
`;

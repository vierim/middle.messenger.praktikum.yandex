import './edit-avatar.scss';

export const template = `
{{#if isVisible}}
  <div class="edit-avatar__wrapper">
  <div class="edit-avatar__overlay"></div>
  <div class="edit-avatar__container">
    <h1 class="edit-avatar__headline">
      {{ headline }}
    </h1>

    <form class="avatar-form" novalidate>
      <div class="edit-avatar__file">
        <input type="file" name="avatar" accept="image/*">
      </div>

      {{{ button }}}
    </form>
      
    <span class="edit-avatar__error">{{ errorText }}</span>
  </div>
  </div>
  {{/if}}
`;

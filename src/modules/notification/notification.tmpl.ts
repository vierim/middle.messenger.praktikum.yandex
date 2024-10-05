import './notification.scss';

export const template = `
  {{#if isActive}}
    <div class="notification__container">
      {{ errorText }}
    </div>
  {{/if}}
`;

import './contacts-list.scss';

export const template = `
  <div class="contacts">
    {{#each items}}
      {{> contact-item }}
    {{/each}}
  </div>
`;

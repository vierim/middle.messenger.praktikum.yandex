import noAvatarPic from '../../../../static/images/noavatar.svg';
import './contact-item.scss';

export const template = `
    <img 
      class="contact-item__avatar"
      src=${noAvatarPic}
      alt="{{ title }}"
    >
    <div class="contact-item__content">

      <div class="contact-item__info">
        <span class="contact-item__name">
          {{ title }} {{ id }}
        </span>
      </div>

      {{#if isActive}}
        Current
      {{/if}}
    </div>
`;

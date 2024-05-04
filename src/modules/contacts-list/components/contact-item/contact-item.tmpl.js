import noAvatarPic from '../../../../static/images/noavatar.svg';
import './contact-item.scss';

export const template = `
  {{#if current }}
    <div class="contact-item contact-item_current">
  {{ else }}
    <div class="contact-item">
  {{/if}}
    <img 
      class="contact-item__avatar"
      src=${noAvatarPic}
      alt="{{ name }}"
    >
    <div class="contact-item__content">

      <div class="contact-item__info">
        <span class="contact-item__name">
          {{ name }}
        </span>
        <span class="contact-item__date-time">
          {{ lastMessage.time }}
        </span>
      </div>

      <div class="contact-item__message">
        <p class="contact-item__text">
          {{#if lastMessage.outgoing }}
            <span class="contact-item__sender-mark">Вы: </span>
          {{/if}}
          
          {{ lastMessage.content }}
        </p>
        
        {{#if unread }}
          <span class="contact-item__unread-counter">
            {{ unread }}
          </span>
        {{/if}}
      </div>
    </div>
  </div>
`;

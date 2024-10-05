import noAvatarPic from '../../../../static/images/noavatar.svg';
import './chats-list-item.scss';

export const template = `
  {{#if isActive}}

    <div class="contact-item__container contact-item__container_current">

  {{else}}

    <div class="contact-item__container">

  {{/if}}

    <img 
      class="contact-item__avatar"
      src=${noAvatarPic}
      alt="{{ title }}"
    >
    <div class="contact-item__content">
      <div class="contact-item__info">
        <span class="contact-item__name">
          {{ title }}
        </span>
        <span class="contact-item__date-time">
          {{ last_message.time }}
        </span>
      </div>

      <div class="contact-item__message">
        <p class="contact-item__text">
          {{#if lastMessage.outgoing }}
            <span class="contact-item__sender-mark">Вы: </span>
          {{/if}}

          {{ last_message.content }}
        </p>
          
        {{#if unread_count }}
          <span class="contact-item__unread-counter">
            {{ unread_count }}
          </span>
        {{/if}}
      </div>
    </div>
  </div> 
`;

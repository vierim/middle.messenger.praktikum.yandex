import noAvatarPic from '../../static/images/noavatar.svg';
import './chat.scss';

export const template = `
  <div class="chat">
    <div class="chat__header">
      <img 
        class="chat__avatar"
        src=${noAvatarPic}
        alt="Design Destroyer"
      >
      <span class="chat__name">
        Design Destroyer 
      </span>

      {{> menu-button }}
    </div>
    <div class="conversation chat__conversation">
    <div class="conversation__date">19 июня</div>
      <ul class="conversation__list">
        <li class="conversation__item conversation__item_type_inbox">
          <p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.</p>

          <p>Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>
        </li>
      <li class="conversation__item conversation__item_type_outgoing">
        <p>Круто</p>
      </li>
    </ul>
    </div>
    <div class="chat__message">
      <button class="chat__attach-btn"></button>
      <input
        class="chat__message-text"
        name="message"
        placeholder="Сообщение"
      >
      <button class="chat__send-btn"></button>
    </div>
  </div>
`;

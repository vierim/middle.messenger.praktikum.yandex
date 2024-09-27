import noAvatarPic from '../../static/images/noavatar.svg';
import './chat.scss';

export const template = `
  {{#if current}}
  
    <div class="chat__header">
      <img 
        class="chat__avatar"
        src=${noAvatarPic}
        alt="Design Destroyer"
      >
      <span class="chat__name">
        {{ current.title }}
      </span>

      {{{ dropdownMenu }}}
    </div>

    <div class="chat__conversation">
      {{{ messages }}}
    </div>

    {{{ messageForm }}}

  {{else}}

    <div class="chat__greeting">
      <p>Выберите чат чтобы отправить сообщение</p>
    </div>

  {{/if}}  

  {{{ addUserModal }}}
  {{{ removeUserModal }}}

  {{{ notification }}}
`;

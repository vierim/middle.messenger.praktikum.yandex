import './chats-list.scss';

export const template = `
  <ul class="contacts__list">
    {{{ items }}}
  </ul>

  <div class="contacts__button-wrapper">
    {{{ addChatBtn }}}
  </div>

  {{{ addChatModal }}}
`;

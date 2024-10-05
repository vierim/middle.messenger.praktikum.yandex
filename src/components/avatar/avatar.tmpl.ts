import noAvatarPic from '../../static/images/noavatar2.svg';
import './avatar.scss';

export const template = `
  {{#if avatarPic }}

    <img 
      class="avatar__image"
      src="{{ avatarPic }}"
      alt="{{ name }}"
    >

  {{else}}

    <img 
      class="avatar__miss"
      src="${noAvatarPic}"
      alt="{{ name }}"
    >
      
  {{/if}}

  {{#if changeable }}
    <button class="avatar__change-btn">Поменять<br> аватар</button>
  {{/if}}

  {{{ editAvatarModal }}}
`;

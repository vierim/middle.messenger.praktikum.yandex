import noAvatarPic from '../../static/images/noavatar2.svg';
import './avatar.scss';

export const template = `
  <div class="avatar">
    <img 
      class="avatar__image"
      src=${noAvatarPic}
      alt="{{ name }}"
    >
    {{#if changeable }}
      <button class="profile__avatar-btn">Поменять<br> аватар</button>
    {{/if}}
  </div>
`;

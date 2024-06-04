import noAvatarPic from '../../static/images/noavatar2.svg';
import './avatar.scss';

export const template = `
    <img 
      class="avatar__image"
      src=${noAvatarPic}
      alt="{{ name }}"
    >

    {{#if changeable }}
      <button class="avatar__change-btn">Поменять<br> аватар</button>
    {{/if}}
`;

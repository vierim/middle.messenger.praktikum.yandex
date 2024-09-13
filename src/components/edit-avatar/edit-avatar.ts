import Component, { Props } from '../../core/component';

import UserAPI from '../../api/user-api';
import Button from '../button';

import { template } from './edit-avatar.tmpl';

class EditAvatar extends Component {

  constructor(props?: Props) {
    super('div', {
      ...props,

      class: 'edit-avatar',
      headline: 'Загрузите файл',
      isVisible: false,

      button: new Button({
        text: 'Поменять',
        type: 'submit',
      }),

      events: {
        submit: handleFormSubmit,
      }
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }
}


async function handleFormSubmit(event: Event) {
  event.preventDefault();

  const form = new FormData(event.target as HTMLFormElement);

  const userService = new UserAPI();
  userService.updateUserAvatar(form);
}

export default EditAvatar;

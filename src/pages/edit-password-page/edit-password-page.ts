import Component, { Props } from '../../core/component';
import {
  enableFormValidation,
  fieldValidity,
  getFieldsValues,
} from '../../core/validation/form-utils';

import { userController } from '../../controllers';

import { Notification } from '../../modules';
import { Avatar, BackButton, Button, Char } from '../../components';

import { template } from './edit-password-page.tmpl';
import { UpdatePasswordRequest } from '../../api/user-api/interface';

export class EditPasswordPage extends Component {
  constructor(props?: Props) {
    super('main', {
      ...props,

      class: 'layout',

      avatar: new Avatar({
        changeable: false,
      }),
      backButton: new BackButton({ class: 'profile__back-btn' }),
      button: new Button({
        text: 'Сохранить',
      }),

      oldPassword: new Char({
        label: 'Старый пароль',
        type: 'password',
        name: 'oldPassword',
        value: '',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
        isEdit: true,
      }),
      newPassword: new Char({
        label: 'Новый пароль',
        type: 'password',
        name: 'newPassword',
        value: '',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
        isEdit: true,
      }),
      newPasswordRepeat: new Char({
        label: 'Повторите пароль',
        type: 'password',
        name: 'repeat-password',
        value: '',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
        isEdit: true,
      }),

      notification: new Notification(),

      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.handleSubmit(event);
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }

  handleFieldFocusOut(event: Event) {
    const element = event.target as HTMLInputElement;

    fieldValidity(element);
  }

  async handleSubmit(event: Event) {
    const updatePasswordForm = event.target as HTMLFormElement;
    const isFormValid = enableFormValidation(updatePasswordForm);

    if (isFormValid) {
      const data = getFieldsValues(updatePasswordForm) as UpdatePasswordRequest;
      userController.updatePassword(data);
    }
  }
}

import { PageComponent } from '../../core/page';
import { Avatar, Button, Char } from '../../components';
import { template } from './edit-password-page.tmpl';
import { handleFieldValidity, handleFormSubmit } from '../../core/helpers/forms';
import { Props } from '../../core/component/types';

class EditPasswordPageFactory extends PageComponent {
  constructor(props?: Props) {
    super(template, props );
  }
}

export const EditPasswordPage = new EditPasswordPageFactory({
  avatar: new Avatar({ 
    changeable: false 
  }),
  button: new Button({
    text: 'Сохранить',
  }),
  oldPassword: new Char ({
    label: 'Старый пароль',
    type: 'password',
    name: 'old-password',
    value: 'xdr53Frdte',
    minLength: '8',
    maxLength: '40',
    pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
    isEdit: true,
  }),
  newPassword: new Char ({
    label: 'Новый пароль',
    type: 'password',
    name: 'new-password',
    value: '',
    minLength: '8',
    maxLength: '40',
    pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
    isEdit: true,
  }),
  newPasswordRepeat: new Char ({
    label: 'Повторите пароль',
    type: 'password',
    name: 'repeat-password',
    value: '',
    minLength: '8',
    maxLength: '40',
    pattern: '^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$',
    required: true,
    events: {
      focusout: handleFieldValidity,
    },
    isEdit: true,
  }),
  events: {
    submit: handleFormSubmit,
  },
});

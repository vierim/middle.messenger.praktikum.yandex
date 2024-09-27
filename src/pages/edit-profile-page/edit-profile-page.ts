import Component from '../../core/component';
import store, { AppState } from '../../services/store';
import { connect } from '../../core/store';
import {
  enableFormValidation,
  fieldValidity,
  getFieldsValues,
} from '../../core/validation/form-utils';

import { userController } from '../../controllers';

import { Notification } from '../../modules';
import { Avatar, Char, Button, BackButton } from '../../components';

import type { ProfilePageProps } from './interface';

import { template } from './edit-profile-page.tmpl';

class EditProfilePage extends Component {
  constructor(props?: ProfilePageProps) {
    super('main', {
      ...props,
      class: 'layout',

      avatar: new Avatar({
        changeable: false,
      }),
      backButton: new BackButton({ 
        class: 'profile__back-btn',
      }),
      button: new Button({
        text: 'Сохранить',
      }),

      email: new Char({
        label: 'Почта',
        type: 'email',
        name: 'email',
        value: '',
      }),
      login: new Char({
        label: 'Логин',
        type: 'text',
        name: 'login',
        value: '',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
        isEdit: true,
      }),
      name: new Char({
        label: 'Имя',
        type: 'text',
        name: 'first_name',
        value: '',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
        isEdit: true,
      }),
      secondName: new Char({
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
        value: '',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
        isEdit: true,
      }),
      nick: new Char({
        label: 'Имя в чате',
        type: 'text',
        name: 'display_name',
        value: '',
        events: {
          focusout: (event: Event) => this.handleFieldFocusOut(event),
        },
        isEdit: true,
      }),
      phone: new Char({
        label: 'Телефон',
        type: 'tel',
        name: 'phone',
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
          console.log('submit');
          this.handleEditProfileFormSubmit(event);
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

  componentDidMount(): void {
    const { user } = this._props as ProfilePageProps;

    this._children.email.setProps({ value: user.email });
    this._children.login.setProps({ value: user.login });
    this._children.name.setProps({ value: user.first_name });
    this._children.secondName.setProps({
      value: user.second_name,
    });
    this._children.nick.setProps({
      value: user.display_name,
    });
    this._children.phone.setProps({
      value: user.phone,
    });
  }

  handleFieldFocusOut(event: Event) {
    const element = event.target as HTMLInputElement;

    fieldValidity(element);
  }

  async handleEditProfileFormSubmit(event: Event) {
    const profileForm = event.target as HTMLFormElement;

    const isFormValid = enableFormValidation(profileForm);

    if (isFormValid) {
      const data = getFieldsValues(profileForm);
      userController.updateUserData(data);
    }
  }
}

export default connect(store, EditProfilePage, mapStateToProps);

function mapStateToProps(state: AppState) {
  return { user: { ...state.user } };
}

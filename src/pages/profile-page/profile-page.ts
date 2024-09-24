import Component from '../../core/component';
import { Link } from '../../core/router';
import { connect } from '../../core/store';

import store, { AppState } from '../../services/store';
import { authController } from '../../controllers';

import { Avatar, BackButton, Button, Char } from '../../components';

import type { ProfilePageProps } from './interface';

import { template } from './profile-page.tmpl';

class ProfilePage extends Component {
  constructor(props?: ProfilePageProps) {
    super('main', {
      ...props,
      class: 'layout',

      avatar: new Avatar({
        changeable: true,
      }),
      backButton: new BackButton({
        class: 'profile__back-btn',
        url: '/messenger',
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
      }),
      name: new Char({
        label: 'Имя',
        type: 'text',
        name: 'first_name',
        value: '',
      }),
      secondName: new Char({
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
        value: '',
      }),
      nick: new Char({
        label: 'Имя в чате',
        type: 'text',
        name: 'display_name',
        value: '',
      }),
      phone: new Char({
        label: 'Телефон',
        type: 'tel',
        name: 'phone',
        value: '',
      }),

      editProfilePageLink: new Link({
        anchor: 'Изменить данные',
        href: '/settings/edit-profile',
        class: 'profile__controls-link',
      }),
      editPasswordPageLink: new Link({
        anchor: 'Изменить пароль',
        href: '/settings/edit-password',
        class: 'profile__controls-link',
      }),

      logoutButton: new Button({
        text: 'Выйти',
        type: 'button',
        class: 'profile__logout-button',
        events: {
          click: (event: Event) => {
            event.preventDefault();
            this.handleLogoutClick();
          },
        },
      }),
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }

  componentDidMount(): void {
    const { user } = this._props;

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

  async handleLogoutClick() {
    await authController.logout();
  }
}

export default connect(store, ProfilePage, mapStateToProps);

function mapStateToProps(state: AppState) {
  return { user: { ...state.user } };
}

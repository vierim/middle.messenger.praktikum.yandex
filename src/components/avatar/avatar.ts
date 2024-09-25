import Component, { Props } from '../../core/component';
import { connect } from '../../core/store';

import store, { AppState } from '../../services/store';
import { userController } from '../../controllers';

import Modal from '../modal';
import Input from '../input';

import { template } from './avatar.tmpl';

class Avatar extends Component {
  constructor(props: Props) {
    super('div', {
      ...props,
      class: 'avatar',

      editAvatarModal: new Modal({
        headline: 'Загрузите файл',
        buttonText: 'Поменять',
        formFields: [
          new Input({
            name: 'avatar',
            type: 'file',
            acceptFileTypes: 'image/*',
          })
        ],
        onSubmit: (event: Event) => {
          this.handleEditAvatarFormSubmit(event);
        },
      }),

      events: {
        click: (event: Event) => {
          event.stopPropagation();

          if (props.changeable === true) {
            this.handleAvatarClick();
          }
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
  
  handleAvatarClick() {
    this._children.editAvatarModal.setProps({ isVisible: true });
  }

  async handleEditAvatarFormSubmit(event: Event) {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    userController.updateUserAvatar(form);
  }
  
}

export default connect(store, Avatar, mapStateToProps);

function mapStateToProps(state: AppState) {
  return {
    avatarPic: state.user?.avatar
      ? `https://ya-praktikum.tech/api/v2/resources${state.user?.avatar}`
      : undefined,
  };
}

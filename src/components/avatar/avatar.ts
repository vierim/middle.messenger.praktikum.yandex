import Component, { Props } from '../../core/component';
import { connect } from '../../core/store';

import EditAvatar from '../edit-avatar';

import store, { AppState } from '../../services/store';

import { template } from './avatar.tmpl';

const editAvatar = new EditAvatar();

export class Avatar extends Component {
  constructor(props: Props) {
    super('div', {
      ...props,
      class: 'avatar',

      editAvatar,

      events: {
        click: (event: Event) => {
          event.stopPropagation();

          const element = event.target as HTMLElement;
          if (!element) {
            return;
          }

          const isOverlayClick =
            element.classList.value === 'edit-avatar__overlay';
          if (isOverlayClick) {
            editAvatar.setProps({ isVisible: false });
            return;
          }

          if (props.changeable === true) handleAvatarClick();
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
}

function handleAvatarClick() {
  editAvatar.setProps({ isVisible: true });
}

export default connect(store, Avatar, mapStateToProps);

function mapStateToProps(state: AppState) {
  return {
    avatarPic: state.user?.avatar
      ? `https://ya-praktikum.tech/api/v2/resources${state.user?.avatar}`
      : undefined,
  };
}

import Component, { Props } from '../../core/component';
import { connect } from '../../core/store';

import store, { AppState } from '../../services/store';

import ContactItem from './components/contact-item';

import { template } from './contacts-list.tmpl';

class ContactsList extends Component {
  constructor(props?: Props) {
    super('div', {
      ...props,
      class: 'contacts',
      current: undefined,
    });
  }

  render() {
    return this.compile(template, {
      ...this._props,
      ...this._children,
    });
  }
}

export default connect(store, ContactsList, mapStateToProps);

function mapStateToProps(state: AppState) {
  const currentChat = state.activeChat?.id;

  const chatItems = state.chats.map(({ id, ...rest }) => {
    const item = {
      id,
      isActive: id === currentChat,
      ...rest,
    };

    return new ContactItem(item);
  });

  return { items: chatItems, current: currentChat };
}

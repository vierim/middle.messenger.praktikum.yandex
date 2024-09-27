import Component, { Props } from '../../../../core/component';
import { connect } from '../../../../core/store';
import store, { AppState } from '../../../../services/store';
import MessageItem from '../message-item/message-item';

import { template } from './messages-list.tmpl';

class MessagesList extends Component {
  constructor(props?: Props) {
    super('ul', {
      ...props,
      class: 'conversation',
    });
  }

  render() {
    return this.compile(template, {
      ...this._props,
      ...this._children,
    });
  }
}

export default connect(store, MessagesList, mapStateToProps);

function mapStateToProps(state: AppState) {
  const messages = state.messages.map((message) => {
    return new MessageItem({
      content: message.content,
      incoming: message.direction === 'incoming',
    });
  });

  return { messages };
}

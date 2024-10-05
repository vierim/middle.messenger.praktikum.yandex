import Component, { Props } from '../../../../core/component';
import { template } from './message-form.tmpl';

class MessageForm extends Component {
  constructor(props?: Props) {
    super('form', {
      ...props,
      class: 'message-form',
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default MessageForm;

import Component, { Props } from '../../core/component';

import { template } from './notification.tmpl';
import store, { AppState } from '../../services/store';
import { connect } from '../../core/store';

class Notification extends Component {
  
  constructor(props?: Props) {
    super('div', {
      ...props,
      class: 'notification',
      isActive: false,
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }
}

export default connect(store, Notification, mapStateToProps);

function mapStateToProps(state: AppState) {
  return {
    isActive: state.hasErrorEvent,
    errorText: state.errorMessage,
  };
}

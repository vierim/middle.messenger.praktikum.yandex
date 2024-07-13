import Handlebars from 'handlebars';

import { Component } from '../../core/component';
import { Props } from '../../core/component/types';

import { connect } from '../../core/store';
import store, { AppState } from '../../services/store';

import { template } from './char.tmpl';

class Char extends Component {
  constructor(props: Props) {
    super('div', { ...props, class: 'char' });
  }

  render() {
    const compiledInput = Handlebars.compile(template);
    const result = compiledInput({ ...this._props });

    return result;
  }
}

function mapStateToProps(state: AppState) {
  return { user: state.user, value: state.user.email }
}

export default connect(store, Char, mapStateToProps);

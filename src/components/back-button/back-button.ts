import Handlebars from 'handlebars';

import { Component } from '../../core/component';
import { Props } from '../../core/component/types';

import { router } from '../../main';

import { template } from './back-button.tmpl';

export class BackButton extends Component {
  constructor(props?: Props) {
    super('button', { 
      ...props,
      events: {
        click: () => router.back(),
      }
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });;
  }
}

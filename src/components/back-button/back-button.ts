import Handlebars from 'handlebars';

import Component from '../../core/component';

import router from '../../services/router';

import type { BackButtonProps } from './interface';

import { template } from './back-button.tmpl';

export class BackButton extends Component {
  constructor(props?: BackButtonProps) {
    super('button', { 
      ...props,
      events: {
        click: () => {
          if(props?.url) {
            router.navigate(props.url);
          } else {
            router.back();
          }
        },
      }
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });;
  }
}

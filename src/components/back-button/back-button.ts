import Handlebars from 'handlebars';

import Component, { Props } from '../../core/component';

import router from '../../services/router';

import { template } from './back-button.tmpl';

export class BackButton extends Component {
  constructor(props: Props) {
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

import Handlebars from 'handlebars';

import { Component } from '../../../component';
import { Props } from '../../../component/types';

import { router } from '../../../../main';

import { template } from './link.tmpl';

export default class Link extends Component {
  constructor(props: Props) {
    super('a', {
      ...props,
      events: {
        click: (evt: Event) => {
          evt.preventDefault();

          const target = evt.target as HTMLAnchorElement;
          router.navigate(target.pathname);
        },
      }
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

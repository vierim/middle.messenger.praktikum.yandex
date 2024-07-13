import Handlebars from 'handlebars';

import { Component } from '../../../component';
import { Props } from '../../../component/types';

import { router } from '../../../../main';

import { template } from './link.tmpl';

class Link extends Component {
  constructor(props: Props) {
    super('a', {
      ...props,

      events: {
        click: (event: Event) => {
          event.preventDefault();

          const { pathname } = event.target as HTMLAnchorElement;
          router.navigate(pathname);
        },
      },
    });
  }

  render() {
    return Handlebars.compile(template)({ ...this._props });
  }
}

export default Link;

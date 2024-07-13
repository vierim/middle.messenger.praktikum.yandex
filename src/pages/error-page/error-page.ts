import { Component, Props } from '../../core/component';
import { BackButton } from '../../components';

import { template } from './error-page.tmpl';

export class ErrorPage extends Component {
  constructor(props?: Props) {
    super('main', {
      ...props,
      class: 'layout',
      
      code: 404,
      text: 'Страница не найдена',
      
      backButton: new BackButton({
        class: 'error-data__back-button',
        text: 'Назад',
      }),
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }
}

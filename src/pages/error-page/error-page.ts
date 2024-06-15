import { PageComponent } from '../../core/page';
import { Props } from '../../core/component/types';
import { BackButton } from '../../components';
import { template } from './error-page.tmpl';

export class ErrorPage extends PageComponent {
  constructor(props?: Props) {
    super(template, {
      ...props,
      code: 404,
      text: 'Страница не найдена',
      backButton: new BackButton({
        class: 'error-data__back-button',
        text: 'Назад',
      }),
    });
  }
}

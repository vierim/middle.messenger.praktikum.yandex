import { Props } from '../../core/component/types';
import { PageComponent } from '../../core/page';
import { template } from './error-page.tmpl';

class ErrorPageFactory extends PageComponent {
  constructor(template: string, props?: Props) {
    super(template, props);
  }
}

export const ErrorPage = new ErrorPageFactory(template, {
  code: 404,
  text: 'Страница не найдена',
});

import { Component } from '../component';
import { Props } from '../component/types';

export class PageComponent extends Component {
  constructor(template: string, props?: Props) {
    super('main', {
      ...props,
      class: 'layout',
      pageTemplate: template,
    });

    // console.log({ ...props });
  }

  render() {
    return this.compile(this._props.pageTemplate, {
      ...this._children,
      ...this._props,
    });
  }
}

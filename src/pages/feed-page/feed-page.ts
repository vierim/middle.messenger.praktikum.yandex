import Component, { Props } from '../../core/component';
import { Link } from '../../core/router';

import { chatController } from '../../controllers';
import { SearchBar, ChatsList, Chat } from '../../modules';

import { template } from './feed-page.tmpl';

class FeedPage extends Component {

  constructor(props?: Props) {
    super('main', {
      ...props,
      
      class: 'layout',

      profilePageLink: new Link({
        anchor: 'Профиль',
        href: '/settings',
        class: 'feed__nav-link',
      }),
      searchBar: new SearchBar(),
      chatsList: new ChatsList(),
      activeChat: new Chat(),
    });
  }

  render() {
    return this.compile(template, {
      ...this._children,
      ...this._props,
    });
  }

  async componentDidMount() {
    await chatController.getAllChats();
  }
}

export default FeedPage;

import { PageComponent } from '../../core/page';
import { Props } from '../../core/component/types';
import { Link } from '../../core/router';

import { ContactsList, SearchBar, Chat, ContactItem } from '../../modules';

import { template } from './feed-page.tmpl';

import { contacts } from './mock-data';

export class FeedPage extends PageComponent {
  constructor(props?: Props) {
    super(template, {
      ...props,
      profilePageLink: new Link({
        anchor: 'Профиль',
        href: '/settings',
        class: 'feed__nav-link',
      }),
      searchBar: new SearchBar(),
      contactsList: new ContactsList({
        items: contacts.map((item) => new ContactItem(item)),
      }),
      chat: new Chat(),
    });
  }
}

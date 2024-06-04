import { PageComponent } from '../../core/page';
import { ContactsList, SearchBar, Chat, ContactItem } from '../../modules';

import { contacts } from './mock-data';
import { template } from './feed-page.tmpl';
import { Props } from '../../core/component/types';

class FeedPageFactory extends PageComponent {
  constructor(template: string, props?: Props) {
    super(template, props);
  }
}

export const FeedPage = new FeedPageFactory(template, {
  searchBar: new SearchBar(),
  contactsList: new ContactsList({
    items: contacts.map((item) => new ContactItem(item)),
  }),
  chat: new Chat(),
});

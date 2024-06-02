import './feed-page.scss';

export const template = `
  <div class="feed">
    <div class="feed__sidebar">
      <nav class="feed__nav">
        <a href="/profile" class="feed__nav-link">Профиль</a>
      </nav>
      <div class="feed__search-bar">
        {{{ searchBar }}}
      </div>

      {{{ contactsList }}}
    </div>
    <div class="feed__chat">
      {{{ chat }}}
    </div>
  </div>
`;

import './feed-page.scss';

export const template = `
  <div class="feed">
    <div class="feed__sidebar">
      <nav class="feed__nav">
        {{{ profilePageLink }}}
      </nav>

      <div class="feed__search-bar">
        {{{ searchBar }}}
      </div>

      {{{ chatsList }}}
    </div>
    
    <div class="feed__chat">
      {{{ activeChat }}}
    </div>
  </div>
`;

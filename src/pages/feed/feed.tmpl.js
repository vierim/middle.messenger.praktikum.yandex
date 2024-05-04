import './feed.scss';

export const template = `
  <div class="feed">
    <div class="feed__sidebar">
      <nav class="feed__nav">
        <a href="#" class="feed__nav-link">Профиль</a>
      </nav>
      <div class="feed__search-bar">
        {{> search-bar }}
      </div>
      {{> contacts-list }}
    </div>
    <div class="feed__chat">
      {{> chat }}
    </div>
  </div>
`;

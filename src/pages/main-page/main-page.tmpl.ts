import './main-page.scss';

export const template = `
  <nav>
    <ul class="navigation">  
      {{#each items}}
        <li>
          <a href="{{ this.url }}">
            {{ this.linkText }}
          </a>
        </li>
      {{/each}}
    </ul>
  </nav>
`;

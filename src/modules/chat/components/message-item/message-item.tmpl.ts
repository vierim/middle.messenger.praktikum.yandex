import './message-item.scss';

export const template = `
  {{#if incoming}}

    <div class="message-item message-item_direction_in">
      <div class="message-item__container message-item__container_direction_in">
        {{ content }}
      </div>
    </div>

  {{else}}
  
    <div class="message-item message-item_direction_out">
      <div class="message-item__container message-item__container_direction_out">
        {{ content }}
      </div>
    </div>

  {{/if}}
`;

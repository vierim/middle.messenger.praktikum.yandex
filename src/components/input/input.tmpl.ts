import './input.scss';

export const template = `
  <div class="input">
    <input
      {{#if error }}
        class="input__field input__field_error"
        {{ else }}
        class="input__field"
      {{/if}}
      name={{ name }}
      type={{ type }}
      id={{ name }}
      placeholder=" "
    >
    <label 
      class="input__label"
      for={{ name }}
    >
      {{ label }}
    </label>

    {{#if error }}
      <span class="input__error-text">
        {{ error }}
      </span>
    {{/if}}
  </div>
`;

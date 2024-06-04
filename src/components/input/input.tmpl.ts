export const template = `
    <input
      class="input__field"
      name={{ name }}
      type={{ type }}
      id={{ name }}
      placeholder=" "

      {{#if minLength }}
        minlength={{ minLength }}
      {{/if}}

      {{#if maxLength }}
        maxlength={{ maxLength }}
      {{/if}}

      {{#if pattern }}
        pattern={{ pattern }}
      {{/if}}

      {{#if required }}
        required
      {{/if}}
    >
    <label 
      class="input__label"
      for={{ name }}
    >
      {{ label }}
    </label>

    <span class="input__error-text error-message {{ name }}-error"></span>
`;

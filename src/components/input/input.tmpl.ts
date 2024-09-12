import './input.scss';

export const template = `
  <input
    class="input__field"
    name={{ name }}
    type={{ type }}
    id={{ name }}
    placeholder=" "
    autocomplete="off"
  >
  <label 
    class="input__label"
    for={{ name }}
  >
    {{ label }}
  </label>

  <span class="input__error-text error-message {{ name }}-error"></span>
`;

import './input.scss';

export const template = `
  <div class="input">
    <input
      class="input__field"
      name={{ name }}
      type={{ type }}
      id={{ name }}
      placeholder=" "
    >
    <label 
      class="input__label"
      for={{name}}
    >
      {{ title }}
    </label>
  </div>
`;

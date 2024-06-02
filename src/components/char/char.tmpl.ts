import './char.scss';

export const template = `
  <div class="char__container">  
    <label for="{{ name }}" class="char__label">
      {{ label }}
    </label>
    <input 
      type="{{ type }}" 
      name="{{ name }}" 
      id="{{ name }}" 
      class="char__value" 
      value="{{ value }}"

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

      {{#unless isEdit}}
        disabled
      {{/unless}}
    />
  </div>

  <span class="char__error-text error-message {{ name }}-error"></span>
`;

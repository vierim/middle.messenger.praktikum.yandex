import store from '../services/store';

export function errorHandler(error: unknown) {
  if (error instanceof Error) {
    if (error.message !== 'Cookie is not valid') {
      console.error(error.message);

      store.set('hasErrorEvent', true);
      store.set('errorMessage', error.message);

      setTimeout(() => {
        store.set('hasErrorEvent', false);
        store.set('errorMessage', '');
      }, 3000);
    }
  } else {
    console.error('Unknown error');
  }
}

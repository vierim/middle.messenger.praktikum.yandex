import AuthAPI from './api/auth';

import store from './services/store';
import router from './services/router';

import {
  LoginPage,
  RegistrationPage,
  FeedPage,
  ProfilePage,
  EditProfilePage,
  EditPasswordPage,
  ErrorPage,
} from './pages';

import './index.scss';

try {
  const auth = new AuthAPI();
  const userData = await auth.getUserInfo();

  store.set('isAuth', true);
  store.set('user', userData);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.log(error);
  }
}

router.setErrorRoute(ErrorPage);

router
  .push({
    url: '/',
    component: LoginPage,
    config: { anonymousOnly: true },
  })
  .push({
    url: '/sign-up',
    component: RegistrationPage,
    config: { anonymousOnly: true },
  })
  .push({
    url: '/messenger',
    component: FeedPage,
    config: { authOnly: true },
  })
  .push({
    url: '/settings',
    component: ProfilePage,
    config: { authOnly: true },
  })
  .push({
    url: '/settings/edit-profile',
    component: EditProfilePage,
    config: { authOnly: true },
  })
  .push({
    url: '/settings/edit-password',
    component: EditPasswordPage,
    config: { authOnly: true },
  });

router.start();

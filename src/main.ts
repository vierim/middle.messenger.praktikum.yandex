import { authController } from './controllers';
import router from './services/router';
import { errorHandler } from './utils/error-handler';

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

authController.getUserData().then(() => {
  router.navigate('/messenger');
}).catch(errorHandler);

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

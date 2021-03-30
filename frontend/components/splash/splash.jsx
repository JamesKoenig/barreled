import   React          from 'react';
import { Route,
         Switch,
         useLocation,
         Link,
         Redirect     } from 'react-router-dom';

import   SplashPane     from './splash_pane_container';
import   LoginForm      from './login_form_container';
import   SignupForm     from './signup_form_container';
import   Landing        from './landing';

import { LANDING, LOGIN,
         REGISTER } from '../../utils/paths/session';

const DEFAULT = "/404";

const NavButton = (url, label) => (
  <Link key={url} to={url}>
    <button className="header-link">{label}</button>
  </Link>
);

const cases = {
  [LANDING]: {
    AuthForm: Landing,
  },
  [LOGIN]: {
    AuthForm: LoginForm,
  },
  [REGISTER]: {
    AuthForm: SignupForm,
  },
}

export default ({ location }) => (
  <Switch>
    <SplashPane {...cases[useLocation().pathname]} />
  </Switch>
)

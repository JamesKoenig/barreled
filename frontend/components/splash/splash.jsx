import   React        from 'react';
import { Route,
         useLocation,
         Link,
         Switch     } from 'react-router-dom';

import   SplashPane   from './splash_pane_container';
import   LoginForm      from './login_form_container';
import   SignupForm     from './signup_form_container';

const LANDING  = "/"
const LOGIN    = "/login";
const REGISTER = "/register";
const DEFAULT  = "*";

const cases = {
  [LANDING]: {
    navs: [],
    AuthForm: SignupForm,
  },
  [LOGIN]: {
    navs: [(<Link key={REGISTER} to={REGISTER}>register!</Link>)],
    AuthForm: LoginForm,
  },
  [REGISTER]: {
    navs: [(<Link key={LOGIN} to={LOGIN}>login!</Link>)],
    AuthForm: SignupForm,
  },
  [DEFAULT]: {
    navs: [(<Link key={REGISTER} to={REGISTER}>register!</Link>),
           (<Link key={LOGIN}    to={LOGIN}>      login!</Link>)],
    splashText: "There's nothing here.",
    AuthForm: () => (
          <p>Whatever you were looking for doesn't currently exist at this
             address, unless you were looking for this error page, in which
             case: congrats! you totally found it.</p>)
  }
}

export default () => {
  let path = useLocation().pathname;
  path = Object.keys(cases).includes(path) ? path : DEFAULT;
  return (
    <SplashPane {...cases[path]} />
  );
}

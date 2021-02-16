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

const LANDING  = "/"
const LOGIN    = "/login";
const REGISTER = "/signup";
const DEFAULT  = "/404";

const NavButton = (url, label) => (
  <Link key={url} to={url}>
    <button className="header-link">{label}</button>
  </Link>
);

const cases = {
  [LANDING]: {
    navs: [],
    AuthForm: Landing,
  },
  [LOGIN]: {
    navs: [NavButton(REGISTER,"Sign up")],
    AuthForm: LoginForm,
  },
  [REGISTER]: {
    navs: [NavButton(LOGIN,"Log in")],
    AuthForm: SignupForm,
  },
  [DEFAULT]: {
    navs: [ NavButton(LOGIN,"Log in"),
            NavButton(REGISTER,"Sign up") ],
    splashText: "There's nothing here.",
    AuthForm: () => (
          <p>Whatever you were looking for doesn't currently exist at this
             address, unless you were looking for this error page, in which
             case: congrats! you totally found it.</p>)
  }
}

export default ({ location }) => (
  <Switch>
    <Route exact path={Object.keys(cases)}>
      <SplashPane {...cases[location.pathname]} />
    </Route>
    <Redirect to={DEFAULT} />
  </Switch>
)

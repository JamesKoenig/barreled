import {
  Switch,
  useLocation,
} from "react-router-dom";
import React      from "react";
import SplashPane from "./splash_pane";
import LoginForm  from "./login_form_container";
import SignupForm from "./signup_form_container";
import Landing    from "./landing";

import {
  LANDING,
  LOGIN,
  REGISTER,
} from "../../utils/paths/session";

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
};

const Splash = () => (
  <Switch>
    <SplashPane {...cases[useLocation().pathname]} />
  </Switch>
);

export default Splash;

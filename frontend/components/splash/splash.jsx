import   React      from 'react';
import { Route,
         Switch,
         Link   }   from 'react-router-dom';

import   LoginForm    from './login_form_container';
import   SignupForm   from './signup_form_container';
import   SplashHeader from './splash_header';
import   SplashFooter from './splash_footer';

export default () => (
  <div id="splash-pane">
    <SplashHeader />
    <marquee>splash pane!</marquee>
    <div className="slide-flexer">
      <div id="splash-box">
        <h1 className="logo-char">
          Barreled
        </h1>
        <marquee>splash box!</marquee>
        <Switch>
          <Route path="/register" component={SignupForm} />
          <Route path="/login"    component={LoginForm}  />
          <Route path="/"         component={SignupForm} />
        </Switch>
        <Link to="/login">   login</Link>
        <Link to="/register">sign up!</Link>
      </div>
      <SplashFooter />
    </div>
  </div>
)

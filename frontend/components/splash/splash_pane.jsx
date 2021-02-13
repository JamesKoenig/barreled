import   React        from 'react';
import { Route,
         Switch,
         Link,
         useLocation } from 'react-router-dom';

import   LoginForm      from './login_form_container';
import   SignupForm     from './signup_form_container';
import   SplashHeader   from './splash_header';
import   SplashFooter   from './splash_footer';

export default ({ path, navs })  => (
  <div id="splash-pane">
    <marquee>splash pane!</marquee>
    <div className="slide-flexer">
      <div id="splash-box">
        <h1 className="logo-char">
          Barreled
        </h1>
        <p>{path}</p>
        <marquee>splash box!</marquee>
        <div className="auth-form-container">
          <Switch>
            <Route exact path="/"   component={SignupForm} />
            <Route path="/register" component={SignupForm} />
            <Route path="/login"    component={LoginForm}  />
            <Route path="/"         component={() => (<p>no</p>) } />
          </Switch>
        </div>
      </div>
      <SplashHeader navs={navs} />
      <SplashFooter />
    </div>
  </div>
)

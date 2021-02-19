import   React        from 'react';
import { Route,
         Switch,
         Link,
         useLocation } from 'react-router-dom';

import   Header from '../header/header';
import   SplashFooter   from './splash_footer';
import   DemoLoginner   from './demo_login_container';

export default ({ AuthForm, splashText }) => (
  <div id="splash-pane">
    <div className="slide-flexer">
        <div className="splash-box">
          <h1 className="logo-char">
            { splashText || "Barreled" }
          </h1>
          <div className="auth-form-container">
            <AuthForm />
          </div>
          <DemoLoginner />
        </div>
      <SplashFooter />
    </div>
  </div>
)

import   React        from 'react';
import { Route,
         Switch,
         Link,
         useLocation } from 'react-router-dom';

import   SplashHeader   from './splash_header';
import   SplashFooter   from './splash_footer';
import   DemoLoginner   from './demo_login_container';

export default ({ navs, AuthForm, splashText }) => (
  <div id="splash-pane">
    <marquee>splash pane!</marquee>
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
      <SplashHeader navs={navs} />
      <SplashFooter />
    </div>
  </div>
)

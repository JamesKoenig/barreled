import   React        from 'react';
import { Route,
         Switch,
         Link,
         useLocation } from 'react-router-dom';

import   SplashHeader   from './splash_header';
import   SplashFooter   from './splash_footer';

export default ({ navs, AuthForm, SplashBox }) => (
  <div id="splash-pane">
    <marquee>splash pane!</marquee>
    <div className="slide-flexer">
      {
        SplashBox ? <SplashBox /> :
      (
        <div id="splash-box">
          <h1 className="logo-char">
            Barreled
          </h1>
          <marquee>splash box!</marquee>
          <AuthForm />
        </div>
      )}
      <SplashHeader navs={navs} />
      <SplashFooter />
    </div>
  </div>
)

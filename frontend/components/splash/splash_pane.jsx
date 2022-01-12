import   React        from "react";

import SplashFooter from "./splash_footer";
import DemoLoginner from "./demo_login_container";

const SplashPane = ({ AuthForm, splashText }) => (
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
);

export default SplashPane;

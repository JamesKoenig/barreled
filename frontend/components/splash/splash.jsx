import   React      from 'react';
import { Route,
         Switch,
         Link   }   from 'react-router-dom';

import   LoginForm  from './login_form_container';
import   SignupForm from './signup_form_container';

export default () => (
  <div id="splash-pane">
    <header>
      <div>
        <p>left!</p>
      </div>!
      <div>
        <p>right!</p>
      </div>
    </header>
    <p>splash pane!</p>
    <div id="splash-box">
      <p>splash box!</p>
      <Link to="/login">login</Link>
      <Link to="/">sign up!</Link>
      <Switch>
        <Route path="/login" component={LoginForm}  />
        <Route path="/"      component={SignupForm} />
      </Switch>
    </div>
  </div>
)

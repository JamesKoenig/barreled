import   React      from 'react';
import { Switch,
         Route,
         Redirect } from 'react-router-dom';

import Header from '../header/header';

export default ({ logout }) => (
  <Switch>
    <Route exact path="/">
      <div id="feed">
        <button onClick={() => logout()}>logout</button>
        <Header />
      </div>
    </Route>
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
)

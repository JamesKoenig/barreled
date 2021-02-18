import   React      from 'react';
import { Switch,
         Route,
         Redirect } from 'react-router-dom';

export default ({ logout }) => (
  <Switch>
    <Route exact path="/">
      <div id="feed">
        <button onClick={() => logout()}>logout</button>
      </div>
    </Route>
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
)

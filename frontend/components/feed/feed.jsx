import   React      from 'react';
import { Switch,
         Route,
         Redirect } from 'react-router-dom';

export default ({ logout }) => (
  <>
    <Route path="/">
      <div id="feed">
        <button onClick={() => logout()}>logout</button>
      </div>
    </Route>
    <Switch>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </>
)

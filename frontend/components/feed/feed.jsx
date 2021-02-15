import   React      from 'react';
import { Switch,
         Route,
         Redirect } from 'react-router-dom';

export default ({ logout }) => (
  <Switch>
    <Route exact path="/">
      <p>feed placeholder!</p>
      <button onClick={() => logout()}>logout</button>
    </Route>
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
)

import React from 'react';
import {
  Switch,
  Route
} from 'react-router';

export default ( ) => {

  const etcOnClick = event => {
    event.stopPropagation();
    alert("etc action");
  }

  return (
    <Switch>
      <Route exact path={'/posts/:postId'}>
        <button className="post-etc"
                onClick={etcOnClick}>...</button>
      </Route>
      <Route>
        <p className='post-etc'>how</p>
      </Route>
    </Switch>
  )
}

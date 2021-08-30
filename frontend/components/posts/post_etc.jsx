import React from 'react';
import {
  Switch,
  Route
} from 'react-router';

export default ( ) => {

  const etcPostOnClick = event => {
    event.stopPropagation();
    //placeholder
    alert("etc action");
  }

  const etcDefaultOnClick = event => {
    event.stopPropagation();
    //placeholder (as above)
    alert("general etc action");
  }

  return (
    <Switch>
      <Route exact path={'/posts/:postId'}>
        <button className="post-etc"
                onClick={etcPostOnClick}>...</button>
      </Route>
      <Route>
        <p className='post-etc'
           onClick={etcDefaultOnClick}>...</p>
      </Route>
    </Switch>
  )
}

import React from 'react';
import {
  Switch,
  Route
} from 'react-router';

export default ( ) => {

  const postFollowOnClick = event => {
    event.stopPropagation();
    //placeholder
    alert("follow user action goes here");
  }

  return (
    <button className="post-etc"
            onClick={postFollowOnClick}>follow</button>
  )
}

import React from 'react';
import {
  Switch,
  Route
} from 'react-router';

export default ( isFollowed, toggleFollowCb ) => {

  const postFollowOnClick = event => {
    event.stopPropagation();
    //placeholder
    alert("follow user action goes here");
  }

  const iconStr =
    isFollowed ? "person_add_alt" : "how_to_reg";

  return (
    <button className="user-follow-button"
            onClick={postFollowOnClick}>
      <span className="material-icons md-dark">
        { iconStr }
      </span>
    </button>
  )
}

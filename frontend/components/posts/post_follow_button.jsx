import React, {
  useEffect,
} from 'react';

import {
  Switch,
  Route
} from 'react-router';

import onlyOnce from '../../utils/only_once';

export default ( { authorId, isHidden, isFollowed, fetchFollowState } ) => {
  const postFollowOnClick = event => {
    event.stopPropagation();
    //placeholder
    console.log("whoops!");
  }

  const iconStr =
    isFollowed ? "how_to_reg" : "person_add_alt";

  useEffect(() => {
    fetchFollowState();
  }, []);

  return (
    <button className="user-follow-button"
            onClick={postFollowOnClick}>
      <span className="material-icons md-dark">
        { iconStr }
      </span>
    </button>
  )
}

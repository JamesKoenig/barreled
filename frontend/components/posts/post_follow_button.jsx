import React, {
  useEffect,
} from 'react';

import {
  Switch,
  Route
} from 'react-router';

import onlyOnce from '../../utils/only_once';

export default ( {
  authorId,
  isHidden,
  isFollowed,
  fetchFollowState,
  toggleFollow,
} ) => {
  const postFollowOnClick = event => {
    event.stopPropagation();
    toggleFollow();
  }

  const iconStr =
    isFollowed ? "how_to_reg" : "person_add_alt";

  useEffect(() => {
    fetchFollowState();
  }, []);

  return (
    <button className="user-follow-button post-interaction-button"
            onClick={postFollowOnClick}>
      <span className="material-icons md-dark">
        { iconStr }
      </span>
    </button>
  )
}

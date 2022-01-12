import React, {
  useEffect,
} from "react";

import onlyOnce from "../../utils/only_once";

const PostFollowButton = ( {
  isHidden,
  isFollowed,
  fetchFollowState,
  toggleFollow,
} ) => {
  const postFollowOnClick = onlyOnce( event => {
    event.stopPropagation();
    toggleFollow();
  });

  const iconStr =
    isFollowed ? "how_to_reg" : "person_add_alt";

  useEffect(() => {
    fetchFollowState();
  }, []);

  return isHidden ? null : (
    <button className="user-follow-button post-interaction-button"
            onClick={postFollowOnClick}>
      <span className="material-icons md-dark">
        { iconStr }
      </span>
    </button>
  );
};

export default PostFollowButton;

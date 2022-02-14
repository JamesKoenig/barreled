import React, {
  useEffect,
} from "react";

import onlyOnce from "../../utils/only_once";

const FollowButton = ({
  hiddenFollow,
  isFollowed,
  fetchFollowState,
  toggleFollow,
}) => {
  const followButtonOnClick = onlyOnce( event => {
    event.stopPropagation();
    toggleFollow();
  });

  const iconStr =
    isFollowed ? "how_to_reg" : "person_add_alt";

  useEffect( () => {
    fetchFollowState();
  }, []);

  return (isFollowed === undefined || hiddenFollow) ? null : (
    <button className="user-follow-button post-interaction-button"
            onClick={followButtonOnClick} >
      <span className="material-icons md-dark">
        { iconStr }
      </span>
    </button>
  );
};

export default FollowButton;

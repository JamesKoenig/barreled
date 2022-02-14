import React from "react";

import FollowButton from "../follow/follow_button_container";

const FeaturedUser = ({userId, userName}) => (
  <li className="featured-user-element">
    <p>{`${userName}`} </p>
    <FollowButton
      userId={userId} />
  </li>
);

export default FeaturedUser;

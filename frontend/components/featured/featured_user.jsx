import React from "react";

import FeaturedFollowButton from "./featured_follow_button_container";

const FeaturedUser = ({userId, userName}) => (
  <li className="featured-user-element">
    <p>{`${userName}`} </p>
    <FeaturedFollowButton
      userId={userId} />
  </li>
);

export default FeaturedUser;

import React from "react";

const FeaturedUser = ({userName}) => (
  <li className="featured-user-element">
    <p>{`${userName}`} </p>
    <span className="material-icons md-dark">
      person_add_alt
    </span>
  </li>
);

export default FeaturedUser;

import React, {
  useEffect,
} from "react";

import FeaturedUser from "./featured_user_container";

const Featured = ({featuredUsers, getFeatured}) => {
  useEffect( () => {
    getFeatured();
  }, []);

  return (
    <div className="featured-accounts">
      <h3>featured accounts</h3>
      <ul>
        { featuredUsers.map( ({id,username}) => {
          console.log(id);
          console.log(username);
          return (<FeaturedUser key={`featured-user-${id}`}
                                userId={id}
                                userName={username} />); }) }
      </ul>
    </div>
  );
};

export default Featured;

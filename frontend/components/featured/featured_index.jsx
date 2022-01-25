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
      <h2 className="featured-title">
        featured accounts
      </h2>
      <ul>
        { featuredUsers.map( ({id,username}) =>
          <FeaturedUser key={`featured-user-${id}`}
                                userId={id}
                                userName={username} />
        )}
      </ul>
    </div>
  );
};

export default Featured;

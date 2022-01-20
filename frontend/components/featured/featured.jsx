import React, {
  useEffect,
} from "react";

const FeaturedAccount = ({userName}) => (
  <li>
    <p>{`${userName}`}</p>
  </li>
);

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
          return (<FeaturedAccount key={`featured-user-${id}`}
                            userId={id}
                            userName={username} />); }) }
      </ul>
    </div>
  );
};

export default Featured;

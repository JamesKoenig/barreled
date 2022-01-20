import React from "react";

const FeaturedAccount = ({idx}) => (
  <li>
    <p>{`account number ${idx}`}</p>
  </li>
);

const Featured = () => (
  <div className="featured-accounts">
    <h3>featured accounts</h3>
    <ul>
      { [1,2,3,4,5,6].map( idx =>
        (<FeaturedAccount key={`featured-element-${idx}`}
                          idx={idx}/>) ) }
    </ul>
  </div>
);

export default Featured;

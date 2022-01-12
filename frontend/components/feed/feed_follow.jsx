import React from "react";

const FeedFollow = ({follower}) => {
  if(!follower) return null;
  return (
    <p>{follower.username} followed you</p>
  );
};

export default FeedFollow;

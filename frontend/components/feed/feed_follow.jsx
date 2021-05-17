import React from 'react';

export default ({follower}) => {
  if(!follower) return null;
  return (
    <p>{follower.username} followed you</p>
  )
}

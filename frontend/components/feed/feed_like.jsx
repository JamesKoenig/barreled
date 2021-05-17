import React from 'react';

export default ({user,post}) => {
  if(!post || !user) return null;
  return (
    <div className="feed-like-container">
      <p>{user.username} liked your post {post.body}</p>
    </div>
  )
}

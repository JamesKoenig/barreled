import React, { useEffect }  from 'react';
import PostBox from '../posts/post_box';

export default ({post,author}) => {
  if(!post || !author) return null;
  return (
    <PostBox post={post} author={author} />
  );
}

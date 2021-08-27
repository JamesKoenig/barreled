import React, { useEffect }  from 'react';
import { useHistory } from 'react-router-dom';
import PostBox from '../posts/post_box';

export default ({post,author,postId}) => {
  if(!post || !author) return null;
  return (
    <PostBox post={post} author={author} />
  );
}

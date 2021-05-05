import React from 'react';
import PostBox from '../posts/post_box';

export default ({post, author}) => {
  return (
    <li>
      <PostBox post={post} author={author} />
    </li>
  );
}

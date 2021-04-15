import React from 'react';
import PostDisplay from '../posts/post_display';

export default ({ post, author, getPost }) => (
  <li>
    <PostDisplay post={post} author={author} getPost={getPost} />
  </li>
)

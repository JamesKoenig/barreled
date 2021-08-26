import React, { useEffect }  from 'react';
import { useHistory } from 'react-router-dom';
import PostBox from '../posts/post_box';

export default ({post,author,postId}) => {
  const history = useHistory();
  /* enclose the history object in the callback,
   * as per the example in https://reactrouter.com/native/api/Hooks/usehistory
   *  (retrieved August 26th 2021)
   */
  const onClick = () =>
    history.push(`/posts/${postId}`);

  if(!post || !author) return null;
  // add a div, so that onClick is called
  return (
    <div onClick={onClick}>
      <PostBox post={post} author={author} />
    </div>
  );
}

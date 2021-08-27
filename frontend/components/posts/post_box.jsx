import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import EtcButton from './post_etc';

export default ({ post, author }) => {
  const history = useHistory();
  const location = useLocation();

  /* enclose the history object in the callback,
   * as per the example in https://reactrouter.com/native/api/Hooks/usehistory
   *  (retrieved August 26th 2021)
   */
  const boxOnClick = () => {
    /* I can probably use some react router elements for this but this just
     * gets it done. avert thine eyes lest it offends thee. */
    if( !/\/posts\/.+/.test(location.pathname) ) {
      history.push(`/posts/${post.id}`);
    }
  }

  const likerOnClick = event => {
    event.stopPropagation();
    alert("button pressed");
  }

  return (
    <div className="post-display"
         onClick={boxOnClick} >
      <header className="post-header">
        <h3 className="author-name">{author.username}</h3>
        <EtcButton />
      </header>
      <div className="post-content">
        <p className="post-text">{post.body}</p>
      </div>
      <footer className="post-properties">
        <p>{`${post.totalLikes} likes`}</p>
        <button onClick={ likerOnClick }>hello world</button>
      </footer>
    </div>
  )
}

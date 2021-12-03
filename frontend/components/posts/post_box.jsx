import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import EtcButton from './post_etc';
import TotalLikes from '../likes/total_likes';
import LikeButton from '../likes/like_button_container';

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

  return (
    <div className="post-display"
         onClick={boxOnClick} >
      <header className="post-header">
        <div>
            <h3 className="author-name">{author.username}</h3>
        </div>
        <p>follow button goes here</p>
      </header>
      <div className="post-content">
        {
            post.photoUrl ?
                <img src={post.photoUrl} />
              :
                null
        }
        <p className="post-text">{post.body}</p>
      </div>
      <footer className="post-properties">
        <TotalLikes postId={post.id} />
        <span className="post-misc">
          <LikeButton postId={post.id} />
          <p>share button goes here</p>
        </span>
      </footer>
    </div>
  )
}

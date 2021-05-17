import React from 'react';
import FeedPost from './feed_post_container';
import FeedLike from './feed_like_container';
import FeedFollow from './feed_follow_container';

const _feedItemDisplays = {
  ['like']:   FeedLike,
  ['follow']: props => { console.log(props); return (<FeedFollow {...props} />)},
  ['post']:   FeedPost,
}

export default (feedItem) => {
  const FeedItemBox = _feedItemDisplays[feedItem.type];
  return (
    <li className="feed-index-item">
      <FeedItemBox { ...feedItem } />
    </li>
  );
}

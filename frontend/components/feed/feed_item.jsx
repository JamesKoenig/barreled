import React from 'react';
import FeedPost from './feed_post_container';

const _feedItemDisplays = {
  ['like']:   (() => <p>hello world I'm a like</p>),
  ['follow']: (() => <p>hello world I'm a follow</p>),
  ['post']:   FeedPost,
}

export default(feedItem) => {
  const FeedItemBox = _feedItemDisplays[feedItem.type];
  return (
    <li className="feed-index-item">
      <FeedItemBox { ...feedItem } />
    </li>
  );
}

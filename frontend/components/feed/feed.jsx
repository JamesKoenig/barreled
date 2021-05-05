import React, {
  useEffect
} from 'react';

import FeedItem from './feed_item_container';

export default ({ feedItems, logout, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, []);
  return (
  <div id="feed">
    <button onClick={() => logout()}>logout</button>
    <ul id="feed-index">
      {feedItems.map( (feedItem,idx) => (
        <FeedItem key={`feed-${idx}`} feedItem={feedItem} />
      ))}
    </ul>
  </div>
)}

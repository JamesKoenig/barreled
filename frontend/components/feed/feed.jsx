import React, {
  useEffect
} from "react";

import FeedItem from "./feed_item";

const Feed = ({ feedItems, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div id="feed">
      <ul id="feed-index">
        {feedItems.map( (feedItem,idx) => (
          <FeedItem key={`feed-${idx}`} {...feedItem} />
        ))}
      </ul>
    </div>
  );
};

export default Feed;

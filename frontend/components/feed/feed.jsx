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
      <div id="featured-pane">
        <h1>hello world</h1>
      </div>
      <ul id="feed-index">
        {feedItems.map( (feedItem,idx) => (
          <FeedItem key={`feed-${idx}`} {...feedItem} />
        ))}
      </ul>
    </div>
  );
};

export default Feed;

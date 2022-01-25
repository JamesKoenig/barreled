import React, {
  useEffect
} from "react";

import FeedItem from "./feed_item";
import Featured from "../featured/featured_index_container.jsx"

const Feed = ({ feedItems, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div id="feed">
      <div id="featured-pane">
        <Featured />
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

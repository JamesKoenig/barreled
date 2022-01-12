import React from "react";
import FeedPost from "./feed_post_container";
import FeedLike from "./feed_like_container";
import FeedFollow from "./feed_follow_container";

const _feedItemDisplays = {
  ["like"]:   FeedLike,
  ["follow"]: FeedFollow,
  ["post"]:   FeedPost,
};

const FeedItem = (feedItem) => {
  const FeedItemBox = _feedItemDisplays[feedItem.type];
  return (
    <li className="feed-index-item">
      <FeedItemBox { ...feedItem } />
    </li>
  );
};

export default FeedItem;

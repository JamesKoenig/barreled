import { fetchFeed } from "../utils/feed_notification_utils";
import { fetchPosts } from "../utils/posts";
import { fetchLikes } from "../utils/like_utils";
import { receivePosts } from "./posts";
import { receiveUsers } from "./users";

export const RECEIVE_FEED = "RECEIVE_FEED";

export const receiveFeed = feedEntities => ({
  type: RECEIVE_FEED,
  feedEntities,
});

const genGetFeedLike = callback => () => dispatch =>
  callback()
    .then( ({feedItems,posts,users}) => {
      dispatch(receiveFeed(feedItems));
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    });

export const getFeed  = genGetFeedLike(fetchFeed);

export const getIndex = genGetFeedLike(fetchPosts);

export const getLikes = genGetFeedLike(fetchLikes); 

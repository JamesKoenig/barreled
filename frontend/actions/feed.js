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

export const getFeed = () => dispatch =>
  fetchFeed()
    .then( ({feedItems,posts,users}) => {
      dispatch(receiveFeed(feedItems));
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    });

// if I were to have to write this a third time... I'd abstract it
export const getIndex = () => dispatch =>
  fetchPosts()
    .then( ({feedItems,posts,users}) => {
      dispatch(receiveFeed(feedItems));
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    });

export const getLikes = () => dispatch =>
  fetchLikes()
    .then( ({feedItems,posts,users}) => {
      dispatch(receiveFeed(feedItems));
      dispatch(receivePosts(posts));
      dispatch(receiveUsers(users));
    });


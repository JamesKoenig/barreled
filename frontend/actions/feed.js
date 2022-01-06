import { fetchFeed } from "../utils/feed_notification_utils";
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


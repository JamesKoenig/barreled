import { fetchFeed } from '../utils/feed_notification_utils';

export const RECEIVE_FEED = "RECEIVE_FEED";

export const receiveFeed = feedEntities => ({
  type: RECEIVE_FEED,
  feedEntities,
});

export const getFeed = () => dispatch =>
  fetchFeed()
    .then( feedItems =>
      dispatch(receiveFeed(feedItems))
    );


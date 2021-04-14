export const RECEIVE_SORTED_FEED = "RECEIVE_SORTED_FEED";

export const receiveSortedFeed = feedEntities => ({
  type: RECEIVE_SORTED_FEED,
  feedEntities,
});


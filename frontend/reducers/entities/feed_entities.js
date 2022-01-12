import { RECEIVE_FEED } from "../../actions/feed";

const _defaultState = [];

const feedReducer = (oldState= _defaultState, { type, feedEntities }) => {
  Object.freeze(oldState);
  switch(type) {
    case RECEIVE_FEED:
      return feedEntities;
    default:
      return oldState;
  }
};

export default feedReducer;

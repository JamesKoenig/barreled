import   StoreArray            from '../../utils/store_array';
import { RECEIVE_SORTED_FEED } from '../../actions/feed';

const _defaultState = new StoreArray();

const feedReducer = (oldState= _defaultState, { type, feedEntities }) => {
  Object.freeze(oldState);
  switch(type) {
    case RECEIVE_SORTED_FEED: {
      let storeArray = new StoreArray(oldState);
      storeArray.concat(feedEntities);
      return storeArray;
    }
    default:
      return oldState;
  }
}

export default feedReducer;


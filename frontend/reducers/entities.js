import { combineReducers } from 'redux';

import posts        from './entities/posts';
import users        from './entities/users';
import feedEntities from './entities/feed_entities';

export default combineReducers({
  posts,
  users,
  feedEntities,
});

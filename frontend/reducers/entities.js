import { combineReducers } from 'redux';

import posts from './entities/posts';
import users from './entities/users';

export default combineReducers({
  posts,
  users
});

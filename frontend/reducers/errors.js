import { combineReducers } from 'redux';

import session from './session_errors';
import post from './post_errors';

export default combineReducers({
  session,
  post,
});

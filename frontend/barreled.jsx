import React    from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import * as SessionActions from './actions/session';
import * as PostActions    from './actions/posts';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUserId) {
    preloadedState = {
      session: {
        currentUserId: window.currentUserId
      }
    };
  }
  const store = configureStore(preloadedState);

  window.store          = store;
  window.SessionActions = SessionActions;
  window.PostActions    = PostActions;

  ReactDOM.render(<Root store={store} />, root);
});

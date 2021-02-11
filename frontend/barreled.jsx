import React    from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import * as SessionActions from './actions/session';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.store          = store;
  window.SessionActions = SessionActions;

  ReactDOM.render(<Root store={store} />, root);
});

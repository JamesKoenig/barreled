import React          from 'react';
import { Provider }   from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app.jsx';

export default ( { store } ) => (
  <Provider store={store}>
    <HashRouter>
      <p>I'm in root.jsx!</p>
      <App />
    </HashRouter>
  </Provider>
);

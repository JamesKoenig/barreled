import React          from 'react';
import { Provider }   from 'react-redux';
import { HashRouter } from 'react-router-dom';

export default ( { store } ) => (
  <Provider store={store}>
    <HashRouter>
      <p>I'm in root.jsx!</p>
    </HashRouter>
  </Provider>
);

import React    from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = createStore(() => {}, {});
  ReactDOM.render(<Root store={store} />, root);
});

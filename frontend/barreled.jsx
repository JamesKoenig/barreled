import React    from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if (window.currentUserId) {
    preloadedState = {
      session: {
        currentUserId: window.currentUserId
      }
    };
  }
  const store = configureStore(preloadedState);

  Object.assign(window, {
    store,
  });

  ReactDOM.render(<Root store={store} />, root);
});

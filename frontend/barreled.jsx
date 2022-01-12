import React    from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";
import * as SessionActions from "./actions/session";
import * as PostActions    from "./actions/posts";
import * as FeedActions    from "./actions/feed";
import * as FeedUtils      from "./utils/feed_notification_utils";
import * as PostUtils      from "./utils/posts";

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
    SessionActions,
    PostActions,
    FeedActions,
    PostUtils,
    FeedUtils,
  });


  ReactDOM.render(<Root store={store} />, root);
});

import {
  createStore,
  applyMiddleware
} from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "../reducers/root";

export default (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(
      /* add logger to middleware only if we're not in production, otherwise
       *  just have thunk be the applied middleware.
       *
       * There might be a better way to do this than using ... spreading & array
       *  concat since this is sorta involved-looking, but this should work
       */
      ...([thunk].concat(
        process.env.NODE_ENV !== "production"
          ? logger
          : []
        ) // the hell of closing )'s... indentation saves lives.
      )
    )
  );

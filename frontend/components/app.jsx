import React   from "react";
import Splash  from "./splash/splash";
import Feed    from "./feed/feed_container";
import Explore from "./explore/explore_container";
import {
  AuthRoute,
  AuthSplitRoute,
} from "../utils/route_utils";
import {
  Switch,
  Redirect,
  Route
} from "react-router";
import PostShow from "./posts/show";
import Four04 from   "./404/404";
import * as postUrls    from "../utils/paths/posts";
import * as sessionUrls from "../utils/paths/session";
import * as exploreUrls from "../utils/paths/explore";
import Header     from "./header/header";
import Four04Path from "../utils/paths/404";

import {
  useLocation
} from "react-router-dom";

const postUrlsStrings    = Object.values(postUrls);
const exploreUrlStrings  = Object.values(exploreUrls);
const sessionUrlsStrings = Object.values(sessionUrls);

const App = () => (
  <>
    <Switch>
      <AuthSplitRoute exact path="/"
                      left={Feed}
                      right={Splash} />
      <Route exact path={postUrlsStrings}
                   component={PostShow} />
      <Route exact path={exploreUrlStrings}
                   component={Explore} />
      <AuthRoute exact path={sessionUrlsStrings}
             component={Splash} />
      <Route exact path={Four04Path}
             component={Four04}
      />
      <Redirect to="/404" />
    </Switch>
    <Route path={[
      ...postUrlsStrings,
      ...sessionUrlsStrings,
      ...exploreUrlStrings,
      "*"]}>
      <Header />
    </Route>
  </>
);

export default App;

import   React            from 'react';
import   Splash           from './splash/splash_container';
import   Feed             from './feed/feed_container';
import { AuthSplitRoute } from '../utils/route_utils';
import { Switch,
         Route          } from 'react-router'
import PostShow from './posts/show';
import * as postUrls    from '../utils/paths/posts';
import * as sessionUrls from '../utils/paths/session';
import Header from './header/header';

const postUrlsStrings    = Object.values(postUrls);
const sessionUrlsStrings = Object.values(sessionUrls);

export default () => (
  <>
    <Switch>
      <Route exact path={postUrlsStrings}
                   component={PostShow} />
      <AuthSplitRoute left={Feed}
                      right={Splash} />
    </Switch>
    <Route path={[...postUrlsStrings,...sessionUrlsStrings,"*"]}>
      <Header />
    </Route>
  </>
)

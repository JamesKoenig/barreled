import   React            from 'react';
import   Splash           from './splash/splash_container';
import   Feed             from './feed/feed_container';
import { AuthSplitRoute } from '../utils/route_utils';
import { Switch,
         Route          } from 'react-router'
import PostShow from './posts/show';
import * as postUrls from '../utils/paths/posts';
import Header from './header/header_container';

export default () => (
  <>
    <Switch>
      <Route exact path={Object.values(postUrls)}
                   component={PostShow} />
      <AuthSplitRoute left={Feed}
                      right={Splash} />
    </Switch>
    <Header />
  </>
)

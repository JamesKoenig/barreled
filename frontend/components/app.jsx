import   React            from 'react';
import   Splash           from './splash/splash_container';
import   Feed             from './feed/feed_container';
import { AuthSplitRoute } from '../utils/route_utils';
import { Switch,
         Route          } from 'react-router'
import PostShow from './posts/show';

export default () => (
  <Switch>
    <Route exact path="/posts/:postId"
                 component={PostShow} />
    <AuthSplitRoute left={Feed}
                    right={Splash} />
  </Switch>
)

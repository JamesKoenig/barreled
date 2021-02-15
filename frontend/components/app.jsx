import   React            from 'react';
import   Splash           from './splash/splash_container';
import   Feed             from './feed/feed_container';
import { AuthSplitRoute } from '../utils/route_utils';

export default () => (
  <AuthSplitRoute path="*"
                  left={Feed}
                  right={Splash} />
)

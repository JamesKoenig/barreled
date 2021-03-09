import React from 'react';
import { AuthSplitRoute } from '../../utils/route_utils';
import { useRouteMatch  } from 'react-router'

import   AuthHeader  from './auth_header_container';
import   UserHeader  from './user_header_container';

export default () => (
  <AuthSplitRoute left={UserHeader}
                  right={AuthHeader}
                  post={useRouteMatch({
                                        path:   "/posts/:postId",
                                        strict: true,
                                        exact:  true
                                      }) }                         />
);

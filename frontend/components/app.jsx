import   React            from 'react';
import { connect        } from 'react-redux';
import   Splash           from './splash/splash_container';
import { AuthRoute,
         ProtectedRoute } from '../utils/route_utils';

export default () => (
  <div>
    <Splash />
  </div>
)



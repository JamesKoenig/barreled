import { withRouter } from 'react-router-dom';
import { connect    } from 'react-redux';

import   Header from './base_header';
import { LANDING, LOGIN,
         REGISTER, DEFAULT } from '../../utils/paths/session';

const authNavs = {
  [LANDING]:  [],
  [LOGIN]: [[REGISTER,"Sign up"]],
  [REGISTER]: [[LOGIN,"Log in"]],
  "*": [ [LOGIN,"Log in"], [REGISTER,"Sign up"] ],
};
const mSTP = (state, { location:  { pathname } } ) => ({
  navLinks: authNavs[pathname] ? authNavs[pathname] : authNavs["*"],
});

const mDTP = dispatch => ({
});

export default withRouter(connect(mSTP,mDTP)(Header));

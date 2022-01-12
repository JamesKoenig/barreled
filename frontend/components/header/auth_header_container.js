import { withRouter } from "react-router-dom";
import { connect    } from "react-redux";

import Header from "./base_header";
import {
  LANDING,
  LOGIN,
  REGISTER,
} from "../../utils/paths/session";

const authNavs = {
  [LANDING]:  [],
  [LOGIN]: [[REGISTER,"Sign up"]],
  [REGISTER]: [[LOGIN,"Log in"]],
  "*": [ [LOGIN,"Log in"], [REGISTER,"Sign up"] ],
};
const mSTP = (state, { location:  { pathname } } ) => ({
  navLinks: authNavs[pathname] ? authNavs[pathname] : authNavs["*"],
});

export default withRouter(connect(mSTP)(Header));

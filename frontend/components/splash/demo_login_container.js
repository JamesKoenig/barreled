import { connect } from "react-redux";
import { login   } from "../../actions/session";

import   DemoLogin from "./demo_login";

const demoUser = {
  email: "demo@demo.demo",
  password: "demoUser"
};

const mDTP = dispatch => ({
  loginDemoUser: e => {
    e.preventDefault();
    dispatch(login(demoUser));
  }
});

export default connect(null, mDTP)(DemoLogin);

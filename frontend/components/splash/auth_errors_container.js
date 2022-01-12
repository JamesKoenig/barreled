import { connect } from "react-redux";

import AuthErrors  from "./auth_errors";

const mSTP = state => ({
  errors: state.errors.session
});

export default connect(mSTP)(AuthErrors);

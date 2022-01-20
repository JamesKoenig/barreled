import { connect } from "react-redux";
import   AuthForm  from "./auth_form";
import {
  login,
  clearErrs,
} from "../../actions/session.js";

const mSTP = () => ({
  fields: [
    { label: "Email", type: "email" },
    { label: "Password", type: "password" }
  ],
  formType: "Sign In",
});

export const mDTP = dispatch => ({
  action: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrs())
});

export default connect(mSTP,mDTP)(AuthForm);

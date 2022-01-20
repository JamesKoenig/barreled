import { connect  } from "react-redux";
import   AuthForm   from "./auth_form";
import {
  createNewUser,
  clearErrs
} from "../../actions/session.js";

const mSTP = () => ({
  fields: [
    { label: "Email", type: "email" },
    { label: "Password", type: "password" },
    { label: "Username" }
  ],
  formType: "Sign Up"
});

const mDTP = dispatch => ({
  action: user => dispatch(createNewUser(user)),
  clearErrors: () => dispatch(clearErrs())
});

export default connect(mSTP,mDTP)(AuthForm);

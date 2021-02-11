import { connect } from 'react-redux';
import   AuthForm  from './auth_form';

const mSTP = state => ({
  formType: 'Sign Up'
});

const mDTP = dispatch => ({
});

export default connect(mSTP,mDTP)(AuthForm);

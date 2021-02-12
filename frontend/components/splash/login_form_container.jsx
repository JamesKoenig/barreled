import   React     from 'react';
import { connect } from 'react-redux';
import   AuthForm  from './auth_form';
import { login   } from '../../actions/session.js';

const mSTP = state => ({
  fields: [
    { label: 'Email' },
    { label: 'Password', type: "password" }
  ],
  formType: 'Sign In'
})

const mDTP = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(mSTP,mDTP)(AuthForm);

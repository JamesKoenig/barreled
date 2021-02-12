import   React     from 'react';
import { connect } from 'react-redux';
import   AuthForm  from './auth_form';

const mSTP = state => ({
  inputs: [<p>hello login container's mSTP!</p>],
  formType: 'Sign In'
})

const mDTP = dispatch => ({
});

export default connect(mSTP,mDTP)(AuthForm);

import   React     from 'react';
import { connect } from 'react-redux';
import   Feed      from './feed';
import { logout  } from '../../actions/session.js';

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null,mDTP)(Feed);

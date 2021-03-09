import { withRouter } from 'react-router-dom';
import { connect    } from 'react-redux';
import { openModal  } from '../../actions/modal';
import { logout     } from '../../actions/session';
import   Header       from './base_header';

const mDTP = dispatch => ({
  navButtons: [
    ["New Post",() => dispatch(openModal('newPost'))],
    ["Logout", () => dispatch(logout())],
  ],
});

export default withRouter(connect(null,mDTP)(Header));

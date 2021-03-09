import { withRouter } from 'react-router-dom';
import { connect    } from 'react-redux';
import { openModal  } from '../../actions/modal';
import   Header       from './base_header';

const mDTP = dispatch => ({
  navButtons: [["New Post",() => dispatch(openModal('newPost'))]],
});

export default withRouter(connect(null,mDTP)(Header));

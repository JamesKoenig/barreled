import   Modal        from './modal';
import { closeModal } from '../../actions/modal';
import { connect    } from 'react-redux';

const mSTP = ({ui: { modal } })=> ({
  modal,
});

const mDTP = dispatch => ({
  closeModal: () =>  dispatch(closeModal()),
});

export default connect(mSTP,mDTP)(Modal);

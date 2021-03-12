import   Modal        from './modal';
import { closeModal } from '../../actions/modal';
import { connect    } from 'react-redux';

import modalManifest from './modal_manifest';

const mSTP = ({ui: { modal: { type, misc } } } ) => ({
  Component: modalManifest[type],
  misc,
});

const mDTP = dispatch => ({
  closeModal: () =>  dispatch(closeModal()),
});

export default connect(mSTP,mDTP)(Modal);

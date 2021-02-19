import { withRouter } from 'react-router-dom';
import { connect    } from 'react-redux';

import   Header from './base_header';

export default withRouter(connect(null,null)(Header));

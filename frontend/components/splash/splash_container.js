import   React        from 'react'
import { connect }    from 'react-redux';
import { withRouter } from 'react-router';

import   Splash    from './splash';

export default withRouter(connect( state => ({}), dispatch => ({}))(Splash));

import   React         from 'react';
import { connect }     from 'react-redux';
import { useLocation } from 'react-router-dom'

import SplashPane  from './splash_pane';

const mSTP = state => ({
});

export default connect(mSTP,null)(SplashPane);

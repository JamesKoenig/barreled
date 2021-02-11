import   React     from 'react';
import { connect } from 'react-redux';

const SplashFooter = props => (
  <footer id="splash-footer">
    <p>footer!</p> 
  </footer>
);

const mSTP = state => ({
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(SplashFooter);

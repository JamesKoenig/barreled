import   React     from 'react';
import { connect } from 'react-redux';

const SplashHeader = props => (
  <header id="splash-header">
    <div>
      <p>left!</p>
    </div>
    <div>
      <p>right!</p>
    </div>
  </header>
)

const mSTP = state => ({
});

const mDTP = dispatch => ({
});

export default connect(mSTP,mDTP)(SplashHeader);

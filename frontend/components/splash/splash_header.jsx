import   React     from 'react';
import { connect } from 'react-redux';

const SplashHeader = ({ navs }) => (
  <header id="splash-header">
    <div>
      <h1 className="logo-char">
        B
      </h1>
    </div>
    <div>
      {navs}
    </div>
  </header>
)

const mSTP = state => ({
});

const mDTP = dispatch => ({
});

export default connect(mSTP,mDTP)(SplashHeader);

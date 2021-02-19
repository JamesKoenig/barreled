import   React     from 'react';
import { connect } from 'react-redux';
import { Link,
         withRouter } from 'react-router-dom';

import { LANDING, LOGIN,
         REGISTER, DEFAULT } from '../../utils/paths/session';

const NavButton = (url, label) => (
  <Link key={url} to={url}>
    <button className="header-link">{label}</button>
  </Link>
);

const authNavs = {
  [LANDING]:  [],
  [LOGIN]: [NavButton(REGISTER,"Sign up")],
  [REGISTER]: [NavButton(LOGIN,"Log in")],
  "*":
          [ NavButton(LOGIN,"Log in"),
            NavButton(REGISTER,"Sign up") ],
};

const SplashHeader = ({ navs }) => (
  <div id="header-container">
    <header id="header">
      <Link to="/">
        <h1 className="logo-char logo-char-animation">
          B
        </h1>
      </Link>
      <div>
        {navs}
      </div>
    </header>
  </div>
)

const mSTP = (state, { location:  { pathname } } ) => ({
  navs: authNavs[pathname] ? authNavs[pathname] : authNavs["*"],
});

const mDTP = dispatch => ({
});

export default withRouter(connect(mSTP,mDTP)(SplashHeader));

import   React     from 'react';
import { connect } from 'react-redux';
import { Link    } from 'react-router-dom';

import { LANDING, LOGIN,
         REGISTER, DEFAULT } from '../../utils/paths/session';

const NavButton = (url, label) => (
  <Link key={url} to={url}>
    <button className="header-link">{label}</button>
  </Link>
);

export default ({ navs }) => (
  <div id="header-container">
    <header id="header">
      <Link to="/">
        <h1 className="logo-char logo-char-animation">
          B
        </h1>
      </Link>
      <div>
        {navs.map( ([path,text]) => NavButton(path,text) )}
      </div>
    </header>
  </div>
)

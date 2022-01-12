import   React   from "react";
import { Link  } from "react-router-dom";
import   Modal   from "../modal/modal_container";

const NavLinkButton = (url, label) => (
  <Link key={url} to={url}>
    <button className="header-link">{label}</button>
  </Link>
);

const NavButton = (label, onClick) => (
  <button key={label}
          onClick={onClick}
          className="header-link">
    {label}
  </button>
);

const BaseHeader = ({ navLinks=[], navButtons=[] }) => (
  <div id="header-container">
    <Modal />
    <header id="header">
      <Link to="/">
        <h1 className="logo-char logo-char-animation">
          B
        </h1>
      </Link>
      <div>
        {navLinks.map(   ([path,text]) => NavLinkButton(path,text) )}
        {navButtons.map( navButtonArgs => NavButton(...navButtonArgs) ) }
      </div>
    </header>
  </div>
);

export default BaseHeader;

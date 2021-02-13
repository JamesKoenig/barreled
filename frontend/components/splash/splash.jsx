import   React        from 'react';
import { Route,
         useLocation,
         Link,
         Switch     } from 'react-router-dom';

import   SplashPane   from './splash_pane_container';

const LANDING  = "/"
const LOGIN    = "/login";
const REGISTER = "/register";

export default () => {
  const path = useLocation().pathname;
  let params = { navs: [] };
  switch(path) {
    case LANDING:
      break;
    case LOGIN:
      params.navs = [(<Link to={REGISTER}>register!</Link>)];
      break;
    case REGISTER:
      params.navs = [(<Link to={LOGIN}>login!</Link>)];
      break;
    default: //404
      params.navs = [(<Link to={REGISTER}>register!</Link>), (<Link to={LOGIN}>login!</Link>)];
  }
  return (
    <SplashPane path={path} {...params} />
  );
}

import   React        from 'react';
import { connect }    from 'react-redux';
import { Redirect,
         Route,
         withRouter } from 'react-router-dom';

const mSTP = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route path={path}
         render={ props => (
                    loggedIn ? (<Redirect to="/"      />)
                             : (<Component {...props} />)
                )} />
);

const Protected = props =>
  Auth( Object.assign({},props,{ loggedIn: !props.loggedIn }) );

export const AuthRoute      = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));

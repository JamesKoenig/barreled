import   React        from 'react';
import { connect }    from 'react-redux';
import { Redirect,
         Route,
         withRouter } from 'react-router-dom';

const mSTP = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

const Either = (bool, path, Left_Component, Right_Component ) => (
  <Route path={path}
         render={ props => (
                    bool ? (<Left_Component  {...props} />)
                         : (<Right_Component {...props} />)
                )} />
);

const AuthSplit = ( { loggedIn, path, left: Left, right: Right } ) =>
    Either(loggedIn, path, Left, Right);

const Auth = ({ loggedIn, path, component: Component }) =>
  AuthSplit({ loggedIn, path, left: (<Redirect to="/"/>), right: Component });

const Protected = props =>
  Auth( Object.assign({},props,{ loggedIn: !props.loggedIn }) );

export const EitherRoute    = withRouter( ({ bool, path, Left, Right }) =>
                                                 Either(bool,path,Left,Right));

export const AuthSplitRoute = withRouter(connect(mSTP)(AuthSplit));

export const AuthRoute      = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));

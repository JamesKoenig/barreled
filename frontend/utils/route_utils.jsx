import   React        from 'react';
import { connect }    from 'react-redux';
import {
  Redirect,
  Route,
} from 'react-router-dom';

const mSTP = state => ({
  loggedIn: Boolean(state.session.currentUserId),
});

const Either = (bool, exact, path,
                Left_Component, Right_Component, ownProps) => (
  <Route exact={exact} path={path}
         render={ props => {
                    const Component = bool ? Left_Component : Right_Component;
                    return (
                     <Component {...props} {...ownProps} />
                    );
                }} />
);

const AuthSplit = ({ loggedIn, exact, path,
                     left: Left, right: Right, ...rest}) => {
  return Either(loggedIn, exact=undefined, path, Left, Right, rest);
}

const Auth = ({ loggedIn, exact, path, component: Component }) =>
  AuthSplit({ loggedIn, path, left: (<Redirect to="/"/>), right: Component });

const Protected = props =>
  Auth( Object.assign({},props,{ loggedIn: !props.loggedIn }) );

export const EitherRoute    = ({ bool, path, Left, Right }) =>
                                                 Either(bool,path,Left,Right);

export const AuthSplitRoute = connect(mSTP)(AuthSplit);

export const AuthRoute      = connect(mSTP)(Auth);

export const ProtectedRoute = connect(mSTP)(Protected);

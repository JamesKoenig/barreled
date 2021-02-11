import * as APIUtils from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER  = "LOGOUT_CURRENT_USER"

const receiveCurrentUser = currentUserId => ({
  type: RECEIVE_CURRENT_USER,
  currentUserId
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch =>
  APIUtils.postUser(formUser)
    .then( user => dispatch(receiveCurrentUser(user.id)) );

export const login = formUser => dispatch =>
  APIUtils.postSession(formUser)
    .then( user => dispatch(receiveCurrentUser(user.id)) );

export const logout = () => dispatch =>
  APIUtils.deleteSession()
    .then( () => dispatch(logoutCurrentUser()) );

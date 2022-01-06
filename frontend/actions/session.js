import * as APIUtils from "../utils/session";

export const RECEIVE_CURRENT_USER   = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER    = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS   = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = currentUserId => ({
  type: RECEIVE_CURRENT_USER,
  currentUserId
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const createNewUser = formUser => dispatch =>
  APIUtils.postUser(formUser)
    .then( user  => dispatch(receiveCurrentUser(user.id)),
           error => dispatch(receiveErrors(error.responseJSON)) );

export const login = formUser => dispatch =>
  APIUtils.postSession(formUser)
    .then( user  => dispatch(receiveCurrentUser(user.id)),
           error => dispatch(receiveErrors(error.responseJSON)) );

export const logout = () => dispatch =>
  APIUtils.deleteSession()
    .then( () => dispatch(logoutCurrentUser()) );

export const clearErrs = () => dispatch =>
  dispatch(clearErrors());

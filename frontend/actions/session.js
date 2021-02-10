import * as APIUtils from '../utils/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER  = "LOGOUT_CURRENT_USER"
// export const REMOVE_USER          = "REMOVE_USER"

const receiveCurrentUser = currentUserId => ({
  type: RECEIVE_CURRENT_USER,
  currentUserId
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

// const removeUser = userId => ({
//   type: REMOVE_USER,
//   userId
// })

export const createNewUser = formUser => dispatch =>
  APIUtils.postUser(formUser)
    .then( user => dispatch(receiveCurrentUser(user)) );

// export const deleteUser = userId => dispatch =>
//   APIUtils.deleteUser(userId)
//     .then( () => dispatch(removeUser(userId)) );

export const login = formUser => dispatch =>
  APIUtils.postSession()
    .then( user => dispatch(receiveCurrentUser(user)) );

export const logout = () => dispatch =>
  APIUtils.deleteSession()
    .then( () => dispatch(logoutCurrentUser()) );

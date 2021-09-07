export const RECEIVE_POST_ERRORS    = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS      = "CLEAR_POST_ERRORS";
export const RECEIVE_POST_NOT_FOUND = "RECEIVE_POST_NOT_FOUND";

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors,
});

export const clearPostErrors = () => ({
  type: CLEAR_POST_ERRORS,
});

export const receivePostNotFound = () => ({
  type: RECEIVE_POST_NOT_FOUND,
})

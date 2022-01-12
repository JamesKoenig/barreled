import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions/modal";

const _defaultState = {type: null, misc: null };
export default (state=_defaultState, action) => {
  switch(action.type) {
    case CLOSE_MODAL:
      return _defaultState;
    case OPEN_MODAL:
      return action.modal;
    default:
      return state;
  }
};

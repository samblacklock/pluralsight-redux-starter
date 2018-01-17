import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

const actionTypeEndsInSuccess = (type) => type.substring(type.length - 8) === '_SUCCESS';

const ajaxStatusReducer = (state = initialState.numAjaxCallsInProgress, action) => {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
};

export default ajaxStatusReducer;

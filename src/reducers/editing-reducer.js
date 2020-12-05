import * as c from './../actions/ActionTypes';
export default (state = false, action) => {
  switch (action.type) {
  case c.ADD_KEG:
    return action.editing;
  case c.EDIT_KEG:
    return action.editing;
  case c.START_EDIT_KEG:
    return action.editing;
  default:
    return state;
  }
};
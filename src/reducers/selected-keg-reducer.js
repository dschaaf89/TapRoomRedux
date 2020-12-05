import * as c from './../actions/ActionTypes';
export default (state = null, action) => {
  console.log(action)
  switch (action.type) {
  case c.ADD_KEG:
    return action.selectedKeg;
  case c.EDIT_KEG:
    return action.selectedKeg;
  case c.SELECT_KEG:
    return action.selectedKeg;
  case c.UN_SELECT:
    return action.selectedKeg;
  default:
    return state;
  }
};
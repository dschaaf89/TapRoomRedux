import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {  name, brand, price,alcoholContent,pintsLeft, id} = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
      name: name,
      brand: brand,
      price: price,
      alcoholContent:alcoholContent,
      pintsLeft:pintsLeft,
      id: id
      }
    });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.EDIT_KEG:
      return action.masterKegList;

    default:
  return state;
  }
};
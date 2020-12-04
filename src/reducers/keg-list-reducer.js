/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  const { name, brand, price, alcoholContent,pintsLeft, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pintsLeft:pintsLeft,
          id: id
        }
      });
      case 'DELETE_TICKET':
        const newState = { ...state };
        delete newState[id];
        return newState;

      default:
        return state;
      }
    };
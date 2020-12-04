import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';
describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: "dead guy ale",
    brand: "rogue Brewing",
    price: "6.00",
    alcoholContent: "6.7%",
    pintsLeft: "123",
    id: 1,
  };
    const currentState = {
    1: {name: "dead guy ale",
    brand: "rogue Brewing",
    price: "6.00",
    alcoholContent: "6.7%",
    pintsLeft: "123",
    id: 1},
    2: {name: "pilsner",
    brand: "crux",
    price: "5.00",
    alcoholContent: "5.2%",
    pintsLeft: "124",
    id: 2}
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new ticket data to masterTicketList', () => {
    const { name, brand, price,alcoholContent,pintsLeft, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent:alcoholContent,
      pintsLeft:pintsLeft,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent:alcoholContent,
        pintsLeft:pintsLeft,
        id: id
      }
    });
  });
  test('Should successfully delete a ticket', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState,action)).toEqual({
      2: {name: "pilsner",
      brand: "crux",
      price: "5.00",
      alcoholContent: "5.2%",
      pintsLeft: "124",
      id: 2}
    });
});
});
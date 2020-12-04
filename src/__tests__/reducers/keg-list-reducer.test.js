import kegListReducer from '../../reducers/keg-list-reducers';

describe('kegListReducer', () => {
  let action;
  const kegData = {
  name: 'Pale Ale',
  brand: 'Sam Adams',
  price: '4.99',
  alcoholContent:'6.5',
  id:1
  };

  const currentState = {
    1:{
    name: 'Pale Ale',
    brand: 'Sam Adams',
    price: '4.99',
    alcoholContent:'6.5',
    id:1
    },
    2:{
    name: 'Octoberfest',
    brand: 'Sam Adams',
    price: '6.99',
    alcoholContent:'6.5',
    id:2

    }
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price,alcoholContent, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });
  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'Octoberfest',
        brand: 'Sam Adams',
        price: '6.99',
        alcoholContent:'6.5',
        id:2
      }
    });
  });


});
  
import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  let action;


  
  const itemData = {
    Name: 'Sam Adams',
    
    quantity: 1,
   
  };
  
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer({}, {type: null})).toEqual({});
  });
  
  test('should successfully select keg ', () => {
  
  action = {
    type: 'SELECT_KEG',
    selectedKeg: {
            Name: 'Sam Adams',
      
      quantity: 1,
    }
     
    };
  
    expect(selectedKegReducer({},action)).toEqual(itemData);
  });

  
});
  
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/ActionTypes';
describe('selectedKegReducer', () => {

  let action;


  
  const itemData = {
    name: 'Sam Adams',
    
    quantity: 1,
   
  };
  
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer({}, {type: null})).toEqual({});
  });
  
  test('should successfully select keg ', () => {
  
  action = {
    type: c.SELECT_KEG,
    selectedKeg: {
            name: 'Sam Adams',
      
      quantity: 1,
    }
     
    };
  
    expect(selectedKegReducer({},action)).toEqual(itemData);
  });

  
});
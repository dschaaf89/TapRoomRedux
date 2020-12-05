import editingReducer from '../../reducers/editing-reducer';

describe('edititngReducer', () => {

  let action;


  
  const itemData = true;
  
  test('Should return default state if no action type is recognized', () => {
    expect(editingReducer(false, {type: null})).toEqual(false);
  });
  
  test('should successfully set editing to false ', () => {
  
  action = {
    type: 'ADD_KEG',
    
      editing: false
     
    };
  
    expect(editingReducer(false,action)).toEqual(false);
  });

  
});
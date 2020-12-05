import { combineReducers } from 'redux';
import kegListReducer from './keg-list-reducer';
// import selectedKegReducer from './selected-keg-reducer';
// import editingReducer from './editing-reducer'
import formVisibleReducer from './form-visible-reducer';


const rootReducer = combineReducers({
  masterKegList: kegListReducer,

  formVisibleOnPage: formVisibleReducer,
 
  
});

export default rootReducer;
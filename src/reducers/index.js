import { combineReducers } from 'redux';
import formVisibleOnPageReducer from './form-visible-reducer'
import kegListReducer from './keg-list-reducer';
import selectedKegReducer from './selected-keg-reducer';
import editingReducer from './editing-reducer';


const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  selectedKeg: selectedKegReducer,
  formVisibleOnPage: formVisibleOnPageReducer,
  editing: editingReducer,
  
});

export default rootReducer;
import { combineReducers } from 'redux';
import editingReducer from './editing-reducer';
import formVisibleOnPageReducer from './form-visible-reducer'
import kegListReducer from './keg-list-reducer';
import selectedKegReducers from './selected-keg-reducers';
import selectedKegReducer from './selected-keg-reducers';

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  //selectedKeg: selectedKegReducers,
  formVisibleOnPage: formVisibleOnPageReducer,
  //editing: editingReducer,
});

export default rootReducer;
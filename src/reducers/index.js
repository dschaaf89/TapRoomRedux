import { combineReducers } from 'redux';
import formVisibleOnPageReducer from './form-visible-reducer'
import kegListReducer from './keg-list-reducer';


const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  formVisibleOnPage: formVisibleOnPageReducer,
});

export default rootReducer;
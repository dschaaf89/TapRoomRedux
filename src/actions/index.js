import * as c from './../actions/ActionTypes';
export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});


export const addKeg = (keg) => {
  
  return {
    type: c.ADD_KEG,
    masterList: keg.masterList,
    editing: false,
    selectedKeg: keg.selectedKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
  }
} 
export const editKeg = (keg) => {
  return {
    type: c.EDIT_KEG,
    masterList: keg.masterList,
    editing: false,
    selectedKeg: keg.selectedKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
  }
} 
export const selectKeg = (keg) => {
  
  return {
    type: c.SELECT_KEG,
    selectedKeg: keg
  }
} 
export const unSelect = (keg) => {
  
  return {
    type: c.UN_SELECT,
    selectedKeg: keg.selectedKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
  }
} 
export const startEditingKeg = (keg) => {
  
  return {
    type: c.START_EDIT_KEG,
    editing: keg
  }
}
export const showForm = (keg) => {
  
  return {
    type: c.SHOW_FORM,
    formVisibleOnPage: keg
  }
}
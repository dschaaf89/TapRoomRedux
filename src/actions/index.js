import * as c from './../actions/ActionTypes';
export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});


export const addKeg = (keg) => {
  const { name, brand, price,alcoholContent,pintsLeft, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
      brand: brand,
      price: price,
      alcoholContent:alcoholContent,
      pintsLeft:pintsLeft,
      id: id
  }
}
export const editKeg = (keg) => {
  
  return {
    type: c.EDIT_KEG,
    masterList: keg.masterKegList,
    editing: false,
    selectedKeg: keg.selectedKeg,
    formVisibleOnPage: keg.formVisibleOnPage,
  }
} 
export const selectKeg = (keg) => {
  
  return {
    type: 'SELECT_KEG',
    selectedKeg: keg
  }
} 
export const startEditingKeg = (keg) => {
  
  return {
    type: 'START_EDIT_KEG',
    editing: keg
  }
}
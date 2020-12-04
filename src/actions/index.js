export const deleteKeg = id => ({
  type: 'DELETE_keg',
  id
});

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    alcoholContent:alcoholContent,
    id: id
  }
}

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const editKeg = (keg) => {
  
  return {
    type: 'EDIT_KEG',
    masterList: keg.masterList,
    editing: false,
    selectedKeg: keg.kegToEdit,
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


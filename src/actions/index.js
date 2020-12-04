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


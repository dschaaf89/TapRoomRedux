import * as actions from './../../actions';
describe('Tap-Room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type:'DELETE_KEG',
      id:1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'dead guy ale', brand: "rogue Brewing",price: "6.00",alcoholContent: "6.7%",pintsLeft: "123",id: 1})).toEqual({
      type: 'ADD_KEG',
      name: "dead guy ale",
      brand: "rogue Brewing",
      price: "6.00",
      alcoholContent: "6.7%",
      pintsLeft: "123",
      id: 1,
    });
  });
});
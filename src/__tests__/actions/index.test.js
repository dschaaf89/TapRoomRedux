import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';
const keg = {
  masterList: {},
  editing: false,
  selectedKeg: null,
  formVisibleOnPage: false,
}
describe('Tap Room actions', () => {
  it('editKeg should create Edit_keg action', () => {
    expect(actions.editKeg(keg)).toEqual(
      {
        type: 'EDIT_KEG',
        masterList: keg.masterList,
        editing: keg.editing,
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(keg)).toEqual(
      {
        type: 'ADD_KEG',
        masterList: keg.masterList,
        editing: keg.editing,
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
  it('select should create SELECT_KEG action', () => {
    expect(actions.selectKeg({})).toEqual(
      {
        type: 'SELECT_KEG',
        selectedKeg: {},
      }
    );
  });
  it('unselect should create UN_SELECT action', () => {
    expect(actions.unSelect(keg)).toEqual(
      {
        type: 'UN_SELECT',
        selectedKeg: keg.selectedKeg,
        formVisibleOnPage: keg.formVisibleOnPage,
      }
    );
  });
  it('start edititng  should create START_EDIT_KEG action', () => {
    expect(actions.startEditingKeg(true)).toEqual(
      {
        type: 'START_EDIT_KEG',
        editing: true,       
      }
    );
  });
  it('showForm  should create SHOW_FORM action', () => {
    expect(actions.showForm(true)).toEqual(
      {
        type: 'SHOW_FORM',
        formVisibleOnPage: true,       
      }
    );
  });
});

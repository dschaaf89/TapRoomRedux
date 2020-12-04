import kegListReducer from '../../reducers/keg-list-reducer';

escribe('kegListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});
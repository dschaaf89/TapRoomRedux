import kegListReducer from '../../reducers/keg-list-reducers';

describe('kegListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});
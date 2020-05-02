import categories, { initialState } from '.';
import { FETCH_CATEGORIES_SUCCESS } from '../../actions/types';


describe('categories reducer', () => {
  it('should return correct state', () => {
    const state = categories(undefined, {});

    expect(state).toBe(initialState);
  });

  it('should return correct state when fetched successfully', () => {
    const action = {
      type: FETCH_CATEGORIES_SUCCESS,
      payload: ['art', 'science'],
    };

    const expectedState = {
      loading: false,
      data: ['art', 'science'],
    };

    const state = categories(undefined, action);

    expect(state).toStrictEqual(expectedState);
  });
});

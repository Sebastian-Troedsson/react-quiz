import categories, { initialState } from './';
import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from '../../actions/types';


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
      categories: ['art', 'science'],
      error: null
    };

    const state = categories(undefined, action);

    expect(state).toStrictEqual(expectedState);
  });

  it('should return correct state when fetch failed', () => {
    const action = {
      type: FETCH_CATEGORIES_FAIL,
      payload: 'Error!',
    };

    const expectedState = {
      loading: false,
      categories: null,
      error: 'Error!',
    };

    const state = categories(undefined, action);

    expect(state).toStrictEqual(expectedState);
  });
});
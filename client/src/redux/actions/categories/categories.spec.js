import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from '../types';
import { fetchCategoriesSuccess, fetchCategoriesFail } from './';

describe('categories actions', () => {
  it('returns correct action', () => {
    const expected = {
      type: FETCH_CATEGORIES_SUCCESS,
      payload: ['art'],
    };

    expect(fetchCategoriesSuccess(['art'])).toStrictEqual(expected);
  });

  it('returns correct action', () => {
    const expected = {
      type: FETCH_CATEGORIES_FAIL,
      payload: 'Thats a bummer',
    };

    expect(fetchCategoriesFail('Thats a bummer')).toStrictEqual(expected);
  });
});

/* DONT FORGET THE FETCHCATEGORIES ACTION WITH AXIOS */

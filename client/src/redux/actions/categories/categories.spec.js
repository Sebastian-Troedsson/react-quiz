import moxios from 'moxios';

import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from '../types';
import fetchCategories, { fetchCategoriesSuccess, fetchCategoriesFail } from './';
import { storeFactory } from '../../../../utils/testUtils';
import { initialState } from '../../reducers/categories/';

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

  describe('getCategories action', () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    })

    it('adds categories to state', (done) => {
      
    });
  });
});


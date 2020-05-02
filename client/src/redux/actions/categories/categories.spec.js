import moxios from 'moxios';

import { FETCH_CATEGORIES_SUCCESS } from '../types';
import fetchCategories, { fetchCategoriesSuccess } from '.';
import { storeFactory } from '../../../../utils/testUtils';

describe('categories action creator', () => {
  it('returns correct action', () => {
    const expected = {
      type: FETCH_CATEGORIES_SUCCESS,
      payload: ['art'],
    };

    expect(fetchCategoriesSuccess(['art'])).toStrictEqual(expected);
  });

  describe('getCategories thunk function', () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    /* Integration test, uses both reducer and action */
    it('adds categories to state when called', (done) => {
      const store = storeFactory();
      const data = [
        { id: 1, name: 'Science' },
        { id: 2, name: 'Art' },
      ];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data,
        });
      });

      const expectedState = { categories: { data, loading: false } };

      return store.dispatch(fetchCategories())
        .then(() => {
          const newState = store.getState();
          expect(newState).toStrictEqual(expectedState);
          done();
        });
    });
  });
});

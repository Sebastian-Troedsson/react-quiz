import axios from 'axios';

import { FETCH_CATEGORIES_SUCCESS } from '../types';

/**
 * Action creator for categories
 * @param {array} categories Array of all categories
 * @returns {object} action
 */
export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

/**
 * Fetch the categories.
 * @returns {function} using redux-thunk to dispatch.
 */
const fetchCategories = () => (dispatch) => axios.get('http://localhost:5000/api/questions/categories')
  .then((res) => dispatch(fetchCategoriesSuccess(res.data)));

export default fetchCategories;

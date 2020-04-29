import axios from 'axios';

import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from "../types";

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
 * Action creator for categories
 * @param {string} error Description of the error
 * @returns {object} action
 */
export const fetchCategoriesFail = (error) => ({
  type: FETCH_CATEGORIES_FAIL,
  payload: error,
});

/**
 * Helper function to remove Science or Entertainment string from some categories.
 * @param {array} categories Array of all categories.
 * @returns {array} New formatted categories.
 */
const formatCategoryName = (categories) => {
  const regex = /Science:\s|Entertainment:\s/g;
  return categories.map(category => ({ ...category, name: category.name.replace(regex, '') }));
};

/**
 * Fetch the categories.
 * @returns {function} using redux-thunk to dispatch.
 */
const fetchCategories = () => (dispatch) => {
  return axios.get('https://opentdb.com/api_category.php')
    .then(res => dispatch(fetchCategoriesSuccess(formatCategoryName(res.data.trivia_categories))))
    .catch(err => dispatch(fetchCategoriesFail(err.message)));
};

export default fetchCategories;

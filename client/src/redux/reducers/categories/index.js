import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from '../../actions/types';

export const initialState = {
  loading: true,
  categories: null,
  error: null,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  };
};

export default categories;

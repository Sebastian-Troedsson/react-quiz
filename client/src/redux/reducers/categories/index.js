import { FETCH_CATEGORIES_SUCCESS } from '../../actions/types';

export const initialState = {
  data: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return { data: action.payload, loading: false };
    default:
      return state;
  }
};

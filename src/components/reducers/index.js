import { combineReducers } from 'redux';
import { user } from './user';
import { categories, isLoading , fetchFailed } from './categories';

const allReducers = combineReducers({
  user,
  categories,
  isLoading,
  fetchFailed
});

export default allReducers;
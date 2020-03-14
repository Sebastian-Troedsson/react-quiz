import { combineReducers } from 'redux';
import isLogged from './isLogged';

const allReducers = combineReducers({
  isLogged
});

export default allReducers;
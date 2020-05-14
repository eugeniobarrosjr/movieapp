import { combineReducers } from 'redux';

import { reducer as movies } from './movies';

export default combineReducers({
  movies,
});

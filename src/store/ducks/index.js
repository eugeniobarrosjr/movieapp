import { combineReducers } from 'redux';

import { reducer as movies } from './movies';
import { reducer as genres } from './genres';

export default combineReducers({
  movies,
  genres,
});

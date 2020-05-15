import { all, takeEvery } from 'redux-saga/effects';

import { MoviesTypes } from '../ducks/movies';
import { searchMovies } from './movies';

export default function* rootSaga() {
  yield all([takeEvery(MoviesTypes.SEARCH_MOVIES_REQUEST, searchMovies)]);
}

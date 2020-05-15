import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { MoviesTypes } from '../ducks/movies';
import { fetchMovies, searchMovies } from './movies';

export default function* rootSaga() {
  yield all([
    takeLatest(MoviesTypes.FETCH_MOVIES_REQUEST, fetchMovies),
    takeEvery(MoviesTypes.SEARCH_MOVIES_REQUEST, searchMovies),
  ]);
}

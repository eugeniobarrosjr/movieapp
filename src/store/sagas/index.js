import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { GenresTypes } from '../ducks/genres';
import { MoviesTypes } from '../ducks/movies';
import { getGenres } from './genres';
import { searchMovies } from './movies';

export default function* rootSaga() {
  yield all([
    takeEvery(MoviesTypes.SEARCH_MOVIES_REQUEST, searchMovies),
    takeLatest(GenresTypes.ADD_GENRES_REQUEST, getGenres),
  ]);
}

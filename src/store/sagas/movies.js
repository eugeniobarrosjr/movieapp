import { call, put } from 'redux-saga/effects';
import services from '../../services';

import MoviesActions from '../ducks/movies';

export function* searchMovies({ filters }) {
  const { searchMovie } = services;

  const { query, page } = filters;
  const response = yield call(searchMovie, { query, page });
  yield put(MoviesActions.searchMoviesSuccess(response.data.results));
}

export function* fetchMovies({ filters }) {
  const { fetchMovie } = services;

  const { page } = filters;
  const response = yield call(fetchMovie, { page });

  console.tron.log(response.data.results);

  yield put(MoviesActions.fetchMoviesSuccess(response.data.results));
}

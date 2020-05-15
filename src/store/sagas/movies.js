import { call, put } from 'redux-saga/effects';
import Service from '../../services';

import MoviesActions from '../ducks/movies';

export function* searchMovies({ filters }) {
  const { url, query, genres, page } = filters;

  const service = new Service({ url, query, genres, page });
  console.tron.log(service);

  const response = yield call(service.searchMovie);
  yield put(MoviesActions.searchMoviesSuccess(response.data.results));
}

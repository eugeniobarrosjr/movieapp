import { call, put } from 'redux-saga/effects';
import Service from '../../services';

import MoviesActions from '../ducks/movies';

export function* getGenres() {
  const service = new Service({ url: '/genre/movie/list' });

  const response = yield call(service.getGenre);
  yield put(MoviesActions.searchMoviesSuccess(response.data.genres));
}

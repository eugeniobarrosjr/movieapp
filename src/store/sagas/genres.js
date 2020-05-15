import { call, put } from 'redux-saga/effects';
import Service from '../../services';

import GenresActions from '../ducks/genres';

export function* getGenres() {
  const service = new Service({ url: '/genre/movie/list' });

  const response = yield call(service.getGenre);
  yield put(GenresActions.addGenresSuccess(response.data.genres));
}

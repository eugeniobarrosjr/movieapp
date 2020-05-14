import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import MoviesActions from '../ducks/movies';

export function* addRepository({ repositoryName }) {
  const response = yield call(api.get, `/repos/${repositoryName}`);

  yield put(MoviesActions.addMovieSuccess(response.data));
}

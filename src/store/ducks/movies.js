import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  data: [],
  page: 1,
  totalPages: 10,
  loading: false,
});

const { Types, Creators } = createActions({
  searchMoviesSuccess: ['movies'],
  searchMoviesRequest: ['filters'],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_MOVIES_REQUEST]: state => state.merge({ loading: true }),
  [Types.SEARCH_MOVIES_SUCCESS]: (state, { movies }) =>
    state.update('data', () => [...movies]),
});

export const MoviesTypes = Types;
export default Creators;

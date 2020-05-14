import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

const { Types, Creators } = createActions({
  addMovieRequest: ['categories'],
  addMovieSuccess: ['movies'],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_MOVIE_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_MOVIE_SUCCESS]: (state, { movies }) =>
    state.update('data', data => [...data, movies]),
});

export const RepositoriesTypes = Types;
export default Creators;

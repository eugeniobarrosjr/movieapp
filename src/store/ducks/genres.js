import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

const { Types, Creators } = createActions({
  addGenresSuccess: ['movies'],
  addGenresRequest: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_GENRES_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_GENRES_SUCCESS]: (state, { genres }) =>
    state.update('data', data => [...data, ...genres]),
});

export const GenresTypes = Types;
export default Creators;

import { API_KEY } from 'react-native-dotenv';

import api from './api';

const searchMovie = ({ query, page }) =>
  api('get', `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);

const fetchMovie = ({ page }) =>
  api('get', `/movie/popular?api_key=${API_KEY}&page=${page}`);

export default { searchMovie, fetchMovie };

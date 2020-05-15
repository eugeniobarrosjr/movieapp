import { API_KEY } from 'react-native-dotenv';

import api from './api';

export default class Service {
  constructor({ url = '', query = '', genres = '', page = 1 }) {
    this.url = url;
    this.query = query;
    this.genres = genres;
    this.page = page;
  }

  getGenre = () => api('get', `${this.url}?api_key=${API_KEY}`);

  searchMovie = () => {
    switch (this.url) {
      case '/search/movie':
        return api(
          'get',
          `${this.url}?api_key=${API_KEY}&query=${this.query}&page=${this.page}`,
        );
      case '/movie/popular':
        return api('get', `${this.url}?api_key=${API_KEY}&page=${this.page}`);
      case '/discover/movie':
        return api(
          'get',
          `${this.url}?api_key=${API_KEY}&with_genres=${this.genres}&page=${this.page}`,
        );
      default:
        return null;
    }
  };
}

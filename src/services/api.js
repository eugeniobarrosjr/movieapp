import axios from 'axios';
import humps from 'humps';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data),
  ],
});

export default function api(method, url, data = {}, options = {}) {
  const httpMethod = method.toLowerCase();

  const hasData = ['post', 'put', 'patch'].indexOf(httpMethod) >= 0;
  const settings = hasData ? options : data;

  return hasData
    ? axiosInstance[httpMethod](url, data, settings)
    : axiosInstance[httpMethod](url, settings);
}

import React from 'react';

import { Container } from './styles';
import MovieCard from '../../components/MovieCard';

const movie = {
  popularity: 505.648,
  vote_count: 3354,
  video: false,
  poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
  id: 419704,
  adult: false,
  backdrop_path: '/5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
  original_language: 'en',
  original_title: 'Ad Astra',
  genre_ids: [18, 878],
  title: 'Ad Astra',
  vote_average: 6,
  overview:
    'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
  release_date: '2019-09-17',
};

const Home = () => (
  <Container>
    <MovieCard movie={movie} />
    <MovieCard movie={movie} />
    <MovieCard movie={movie} />
    <MovieCard movie={movie} />
    <MovieCard movie={movie} />
  </Container>
);

export default Home;

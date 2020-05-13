import React from 'react';

import { Container } from './styles';
import MovieCard from '../../components/MovieCard';

const Home = () => (
  <Container>
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard />
  </Container>
);

export default Home;

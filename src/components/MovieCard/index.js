import React from 'react';

import {
  Container,
  MovieTitle,
  MovieReleaseYear,
  MovieCategories,
  MovieClassificationAndTime,
  MovieScore,
  Row,
  Column,
} from './styles';

const MovieCard = () => (
  <Container>
    <Row>
      <MovieTitle>Ad Astra</MovieTitle>
      <MovieReleaseYear>(2019)</MovieReleaseYear>
    </Row>

    <Row>
      <MovieScore>78%</MovieScore>
      <Column>
        <MovieClassificationAndTime>PG-13 - 2h 3m</MovieClassificationAndTime>
        <MovieCategories>Science, Fiction, Action</MovieCategories>
      </Column>
    </Row>
  </Container>
);

export default MovieCard;

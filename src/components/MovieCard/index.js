import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContentContainer,
  ContentInfoRow,
  Cover,
  CoverContainer,
  MovieCategories,
  MovieColumnInfo,
  MovieReleaseYear,
  MovieScore,
  MovieTitle,
  TitleRow,
} from './styles';

const formatReleaseDateToYear = releaseDate =>
  new Date(releaseDate).getFullYear().toString() || '0000';

const MovieCard = ({ movie }) => {
  const { title, releaseDate, posterPath, voteAverage } = movie;

  return (
    <Container>
      <CoverContainer>
        <Cover
          source={{
            uri: `https://image.tmdb.org/t/p/original${posterPath}`,
          }}
          resizeMode="cover"
        />
      </CoverContainer>
      <ContentContainer>
        <TitleRow>
          <MovieTitle>{title}</MovieTitle>
          <MovieReleaseYear>
            ({formatReleaseDateToYear(releaseDate)})
          </MovieReleaseYear>
        </TitleRow>

        <ContentInfoRow>
          <MovieScore>{voteAverage * 10}%</MovieScore>
          <MovieColumnInfo>
            <MovieCategories>Science, Fiction, Action</MovieCategories>
          </MovieColumnInfo>
        </ContentInfoRow>
      </ContentContainer>
    </Container>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    posterPath: PropTypes.string,
    voteAverage: PropTypes.number,
  }).isRequired,
};

export default MovieCard;

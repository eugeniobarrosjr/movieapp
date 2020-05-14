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
  const { title, poster_path, release_date, vote_average } = movie;
  return (
    <Container>
      <CoverContainer>
        <Cover
          source={{
            uri: `https://image.tmdb.org/t/p/original${poster_path}`,
          }}
          resizeMode="cover"
        />
      </CoverContainer>
      <ContentContainer>
        <TitleRow>
          <MovieTitle>{title}</MovieTitle>
          <MovieReleaseYear>
            ({formatReleaseDateToYear(release_date)})
          </MovieReleaseYear>
        </TitleRow>

        <ContentInfoRow>
          <MovieScore>{vote_average * 10}%</MovieScore>
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
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};

export default MovieCard;

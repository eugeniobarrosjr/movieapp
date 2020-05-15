import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

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

const formatGenres = (genreIds, genres) =>
  genreIds
    .map(id => genres.data.find(genre => genre.id === id).name)
    .slice(0, -1)
    .join(', ');

const MovieCard = ({ movie, genres, navigation }) => {
  const { title, releaseDate, posterPath, voteAverage, genreIds } = movie;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          movie,
        });
      }}
      activeOpacity={0.7}
    >
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
              <MovieCategories>
                {formatGenres(genreIds, genres)}
              </MovieCategories>
            </MovieColumnInfo>
          </ContentInfoRow>
        </ContentContainer>
      </Container>
    </TouchableOpacity>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    posterPath: PropTypes.string,
    voteAverage: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  genres: state.genres,
});

export default connect(mapStateToProps)(MovieCard);

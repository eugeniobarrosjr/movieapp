import React from 'react';
import { connect } from 'react-redux';

import {
  Banner,
  Container,
  Plot,
  PlotTitle,
  ReleaseDate,
  Title,
  Content,
  Chip,
  ChipTitle,
  GenresContainer,
} from './styles';

const getGenresNames = (genreIds, genres) => {
  return genreIds.map(id => genres.data.find(genre => genre.id === id).name);
};

const renderGenres = (genreIds, genres) =>
  getGenresNames(genreIds, genres).map(genre => (
    <Chip key={genre}>
      <ChipTitle>{genre}</ChipTitle>
    </Chip>
  ));

const Details = ({ route, genres }) => {
  const { movie } = route.params;
  const { posterPath, overview, originalTitle, releaseDate, genreIds } = movie;
  return (
    <Container>
      <Banner
        source={{
          uri: `https://image.tmdb.org/t/p/original${posterPath}`,
        }}
        resizeMode="cover"
      />
      <Content>
        <Title>{originalTitle}</Title>
        <ReleaseDate>{releaseDate}</ReleaseDate>
        <GenresContainer>{renderGenres(genreIds, genres)}</GenresContainer>
        <PlotTitle>Plot Summary</PlotTitle>
        <Plot>{overview}</Plot>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  genres: state.genres,
});

export default connect(mapStateToProps)(Details);

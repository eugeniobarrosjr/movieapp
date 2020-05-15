import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesActions from '../../store/ducks/movies';
import GenresActions from '../../store/ducks/genres';

import {
  Container,
  MovieList,
  GenrerList,
  GenrerTitle,
  TitleContainer,
} from './styles';

import MovieCard from '../../components/MovieCard';
import GenreChip from '../../components/GenrerChip';

class Home extends Component {
  componentDidMount() {
    const { searchMoviesRequest, addGenresRequest } = this.props;
    addGenresRequest();
    searchMoviesRequest({ url: '/movie/popular', page: 1 });
  }

  render() {
    const { movies, genres } = this.props;
    console.tron.log(genres);
    return (
      <Container>
        <TitleContainer>
          <GenrerTitle>Genres</GenrerTitle>
        </TitleContainer>
        <GenrerList
          data={genres.data}
          horizontal
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <GenreChip genre={item} />}
        />
        <MovieList
          data={movies.data}
          keyExtractor={item => `${item.id + Math.random()}`}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MoviesActions, ...GenresActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import MoviesActions from '../../store/ducks/movies';
import GenresActions from '../../store/ducks/genres';

import {
  Container,
  MovieList,
  GenrerList,
  Title,
  TitleContainer,
} from './styles';

import MovieCard from '../../components/MovieCard';
import GenreChip from '../../components/GenrerChip';

Icon.loadFont();

class Home extends Component {
  componentDidMount() {
    const { searchMoviesRequest, addGenresRequest } = this.props;
    addGenresRequest();
    searchMoviesRequest({ url: '/movie/popular', page: 1 });
  }

  render() {
    const { movies, genres, navigation } = this.props;

    return (
      <Container>
        <TitleContainer>
          <Title>Genres</Title>
        </TitleContainer>
        <GenrerList
          data={genres.data}
          horizontal
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.7}>
              <GenreChip genre={item} />
            </TouchableOpacity>
          )}
        />
        <TitleContainer>
          <Title>Popular Movies</Title>
        </TitleContainer>
        <MovieList
          data={movies.data}
          keyExtractor={item => `${item.id + Math.random()}`}
          renderItem={({ item }) => (
            <MovieCard movie={item} navigation={navigation} />
          )}
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

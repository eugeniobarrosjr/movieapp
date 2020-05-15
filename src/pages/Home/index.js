import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesActions from '../../store/ducks/movies';
import GenresActions from '../../store/ducks/genres';

import { Container, MovieList } from './styles';

import MovieCard from '../../components/MovieCard';

class Home extends Component {
  componentDidMount() {
    const { searchMoviesRequest, addGenresRequest } = this.props;
    addGenresRequest();
    searchMoviesRequest({ url: '/movie/popular', page: 1 });
  }

  renderItem = ({ item }) => {
    return <MovieCard movie={item} />;
  };

  render() {
    const { movies } = this.props;
    return (
      <Container>
        <MovieList
          renderItem={this.renderItem}
          data={movies.data}
          keyExtractor={item => `${item.id + Math.random()}`}
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

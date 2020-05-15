import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MoviesActions from '../../store/ducks/movies';

import { Container, MovieList } from './styles';

import MovieCard from '../../components/MovieCard';

class Home extends Component {
  componentDidMount() {
    const { fetchMoviesRequest } = this.props;
    fetchMoviesRequest({ page: 1 });
  }

  renderFooter = ({ loading }) => {
    if (loading) return null;

    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  };

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
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

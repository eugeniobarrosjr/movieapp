import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

const GenreChip = ({ genre }) => (
  <Container>
    <Title>{genre.name}</Title>
  </Container>
);

GenreChip.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default GenreChip;

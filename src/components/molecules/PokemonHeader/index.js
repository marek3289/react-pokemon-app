import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Type from 'components/atoms/Type';

const StyledWrapper = styled.div`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.grey};
  display: ${({ types }) => (types !== null ? 'flex' : 'block')};
  justify-content: space-between;
`;

const PokemonHeader = ({ id, types }) => (
  <StyledWrapper types>
    <div>{id}</div>
    {types && (
      <div>
        {types.map(type => (
          <Type key={type.type.name}>{type.type.name}</Type>
        ))}
      </div>
    )}
  </StyledWrapper>
);

PokemonHeader.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  types: PropTypes.arrayOf(PropTypes.object),
};

PokemonHeader.defaultProps = {
  types: null,
};

export default PokemonHeader;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stats from 'components/molecules/Stats';
import Image from 'components/atoms/Image';
import Name from 'components/atoms/Name';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  margin: 0 20px;
  min-width: 250px;

  @media screen and (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1.1fr;
    justify-content: space-evenly;
    margin: 0;
  }
`;

const PokemonBody = ({ name, src, stats }) => (
  <StyledWrapper>
    <Image detailsPage src={src} alt="" />
    <div>
      <Name>{name}</Name>
      <Stats stats={stats} />
    </div>
  </StyledWrapper>
);

PokemonBody.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PokemonBody;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  justify-items: center;
`;

const GridTemplate = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

GridTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridTemplate;

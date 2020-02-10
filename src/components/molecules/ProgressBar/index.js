import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filler from 'components/atoms/Filler';

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: 50px;
  width: 60%;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const ProgressBar = ({ percentage }) => {
  const value = Math.round((percentage / 200) * 100);

  return (
    <StyledWrapper>
      <Filler width={value}>{`${value}%`}</Filler>
    </StyledWrapper>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;

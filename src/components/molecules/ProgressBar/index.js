import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filler from 'components/atoms/Filler';

const StyledSpan = styled.span`
  text-indent: -5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};

  @media screen and (max-width: 1000px) {
    text-indent: -25px;
  }
`;

const StyledWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 60%;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const ProgressBar = ({ percentage }) => {
  const value = Math.round((percentage / 200) * 100);
  const x = window.innerWidth > 1000;

  return (
    <>
      {x ? (
        <StyledWrapper>
          <Filler width={value}>{value}%</Filler>
        </StyledWrapper>
      ) : (
        <>
          <StyledSpan>{value}%</StyledSpan>
          <StyledWrapper>
            <Filler width={value} />
          </StyledWrapper>
        </>
      )}
    </>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;

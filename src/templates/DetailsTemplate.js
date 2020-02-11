import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  margin-top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  min-width: 250px;
  background-color: ${({ theme }) => theme.lightgrey};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 500px) {
    width: 85%;
  }

  @media screen and (max-width: 380px) {
    width: 95%;
  }
`;

const DetailsTemplate = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

DetailsTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default DetailsTemplate;

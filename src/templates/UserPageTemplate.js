import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/molecules/Header';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPageTemplate = ({ children }) => (
  <>
    <Header />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;

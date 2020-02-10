import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo';

const StyledWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.red};
  display: flex;
  align-items: center;
`;

const Header = () => (
  <StyledWrapper>
    <Logo to="/" />
  </StyledWrapper>
);

export default Header;

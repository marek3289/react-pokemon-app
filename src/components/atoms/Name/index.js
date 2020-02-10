import styled from 'styled-components';

const Name = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export default Name;

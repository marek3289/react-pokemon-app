import styled from 'styled-components';

const Filler = styled.div`
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.red};
  border-radius: inherit;
  height: 100%;
  color: ${({ theme }) => theme.lightgrey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  text-align: center;

  @media screen and (max-width: 800px) {
    color: black;
    text-indent: -25px;
    text-align: start;
  }
`;

export default Filler;

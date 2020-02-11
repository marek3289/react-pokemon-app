import styled from 'styled-components';

const Filler = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  text-align: center;
  color: white;
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.red};
  border-radius: inherit;
  height: 100%;
`;

export default Filler;

import styled from 'styled-components';

const Type = styled.span`
  padding: 3px 10px;
  margin: 0 3px;
  background-color: ${({ theme }) => theme.red};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  color: white;
`;

export default Type;

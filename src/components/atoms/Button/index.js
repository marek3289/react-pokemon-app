import styled from 'styled-components';

const Button = styled.button`
  width: 60px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.red};
  color: white;
  font-weight: ${({ theme }) => theme.bold};
  outline: none;
  margin: 0 15px;
  padding: 5px 0px;
  transition: transform 0.1s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;

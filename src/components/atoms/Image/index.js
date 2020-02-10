import styled, { css } from 'styled-components';

const Image = styled.img`
  display: ${({ load }) => (load ? 'none' : 'block')};
  width: 120px;
  height: 120px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${({ detailsPage }) =>
    detailsPage &&
    css`
      width: 200px;
      height: 200px;
      padding: 25px;
    `}
`;

export default Image;

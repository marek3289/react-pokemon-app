import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoIcon from 'assets/img/logo.png';

const Logo = styled(Link)`
  margin-left: 15%;
  background-image: url(${logoIcon});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 120px;
  height: 50px;
`;

export default Logo;

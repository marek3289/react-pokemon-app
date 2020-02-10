import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Spinner from 'components/atoms/Spinner';
import SpinnerImg from 'assets/img/spinner.svg';

const StyledLoading = styled.div`
  width: 120px;
  height: 120px;

  ${({ center }) =>
    center &&
    css`
      position: absolute;
      top: 35%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    `}
`;

const Loading = ({ detailsPage }) => (
  <StyledLoading center={detailsPage}>
    <Spinner src={SpinnerImg} />
  </StyledLoading>
);

Loading.propTypes = {
  detailsPage: PropTypes.bool,
};

Loading.defaultProps = {
  detailsPage: false,
};

export default Loading;

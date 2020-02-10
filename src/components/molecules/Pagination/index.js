import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  margin: 30px;
  align-self: center;
`;

const Pagination = ({ prev, next }) => (
  <StyledWrapper>
    {prev && <Button onClick={prev}>previous</Button>}
    {next && <Button onClick={next}>next</Button>}
  </StyledWrapper>
);

Pagination.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
};

Pagination.defaultProps = {
  prev: null,
  next: null,
};

export default Pagination;

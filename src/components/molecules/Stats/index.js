import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProgressBar from 'components/molecules/ProgressBar';
import Name from 'components/atoms/Name';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (max-width: 800px) {
    width: 120%;
  }
`;

const StyledStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px;
`;

const StyledName = styled(Name)`
  margin: 0;
  min-width: 150px;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;

const Stats = ({ stats }) => (
  <StyledWrapper>
    {stats.map(stat => (
      <StyledStats key={stat.stat.name}>
        <StyledName>{stat.stat.name}</StyledName>
        <ProgressBar percentage={stat.base_stat} />
      </StyledStats>
    ))}
  </StyledWrapper>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Stats;

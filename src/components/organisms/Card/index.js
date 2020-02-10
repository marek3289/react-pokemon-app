import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from 'components/molecules/Loading';
import PokemonHeader from 'components/molecules/PokemonHeader';
import Image from 'components/atoms/Image';
import Name from 'components/atoms/Name';

const StyledWrapper = styled.div`
  margin: 30px 0;
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 5px;
  user-select: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Card = ({ name, url }) => {
  const [index, setIndex] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const pokemonIndex = url.split('/')[6];
    setIndex(pokemonIndex);

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    setImgUrl(imageUrl);
  }, [url]);

  return (
    <StyledWrapper>
      <PokemonHeader id={index} />
      <StyledLink to={`/pokemon/${name}`}>
        {isLoading && <Loading />}
        <Image
          load={isLoading}
          src={imgUrl}
          alt=""
          onLoad={() => setLoading(false)}
        />
        <Name>{name}</Name>
      </StyledLink>
    </StyledWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;

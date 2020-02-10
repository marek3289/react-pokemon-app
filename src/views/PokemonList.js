import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridTemplate from 'templates/GridTemplate';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/organisms/Card';
import Pagination from 'components/molecules/Pagination';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon',
  );

  const [prevPage, setPrevPage] = useState();
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken(c => {
          cancel = c;
        }),
      })
      .then(res => {
        setPrevPage(res.data.previous);
        setNextPage(res.data.next);
        setPokemons(res.data.results);
      });

    return () => cancel();
  }, [currentPage]);

  const handlePagination = page => {
    setCurrentPage(page);
  };

  return (
    <UserPageTemplate>
      <GridTemplate>
        {pokemons.map(pokemon => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </GridTemplate>
      <Pagination
        prev={prevPage ? () => handlePagination(prevPage) : null}
        next={nextPage ? () => handlePagination(nextPage) : null}
      />
    </UserPageTemplate>
  );
};

export default PokemonList;

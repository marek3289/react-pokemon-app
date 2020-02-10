import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserPageTemplate from 'templates/UserPageTemplate';
import DetailsTemplate from 'templates/DetailsTemplate';
import PokemonBody from 'components/organisms/PokemonBody';
import PokemonHeader from 'components/molecules/PokemonHeader';
import Loading from 'components/molecules/Loading';
import TextArea from 'components/atoms/TextArea';

const DetailsPage = ({ match }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const name = match.params.id;

      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;

      const fetchPokemon = await axios.get(pokemonUrl);
      const fetchDescription = await axios.get(pokemonSpeciesUrl);

      setPokemon(fetchPokemon.data);
      fetchDescription.data.flavor_text_entries.some(flavor => {
        const desc = flavor.language.name === 'en' ? flavor.flavor_text : null;
        return setDescription(desc);
      });
      setLoaded(true);
    };

    fetchData();
  }, [match.params.id]);

  const { id, types, name, sprites, stats } = pokemon;

  return (
    <UserPageTemplate>
      {isLoaded ? (
        <DetailsTemplate>
          <PokemonHeader id={id} types={types} />
          <PokemonBody name={name} src={sprites.front_default} stats={stats} />
          <TextArea>{description}</TextArea>
        </DetailsTemplate>
      ) : (
        <Loading detailsPage />
      )}
    </UserPageTemplate>
  );
};

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default DetailsPage;

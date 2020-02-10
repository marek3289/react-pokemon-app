import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from 'views/PokemonList';
import DetailsPage from 'views/DetailsPage';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.pokemons} component={PokemonList} />
        <Route path={routes.pokemon} component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

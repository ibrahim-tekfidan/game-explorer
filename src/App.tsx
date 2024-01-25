import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'}>Aside</GridItem>
      </Show>
      <GridItem area={'main'}>Main</GridItem>
    </Grid>
  );
};

export default App;

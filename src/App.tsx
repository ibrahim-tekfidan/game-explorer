import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react';

const App = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
    >
      <GridItem backgroundColor={'blue'} area={'nav'}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem backgroundColor={'gold'} area={'aside'}>
          Aside
        </GridItem>
      </Show>
      <GridItem backgroundColor={'red'} area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;

import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';
import GenreList from './components/genreList';

const App = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;

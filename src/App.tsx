import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';
import GenreList from './components/GenreList';
import { useState } from 'react';

const App = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<number>();

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
        <GridItem paddingX={2} area={'aside'}>
          <GenreList
            onSelectedGenreId={genreId => setSelectedGenreId(genreId)}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameGrid selectedGenreId={selectedGenreId} />
      </GridItem>
    </Grid>
  );
};

export default App;

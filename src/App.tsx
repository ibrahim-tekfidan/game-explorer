import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformsSelector from './components/PlatformsSelector';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            onGameQuery={genreId => setGameQuery({ ...gameQuery, genreId })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <PlatformsSelector
          onGameQuery={platformId => setGameQuery({ ...gameQuery, platformId })}
          selectedPlatformId={gameQuery.platformId}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;

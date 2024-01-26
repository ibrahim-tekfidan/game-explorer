import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformsSelector from './components/PlatformsSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  console.log(gameQuery);

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
        <NavBar
          onGameQuery={searchText => setGameQuery({ search: searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={2} area={'aside'}>
          <GenreList
            onGameQuery={genreId => setGameQuery({ ...gameQuery, genreId })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'} paddingX={6}>
        <GameHeading
          genreId={gameQuery.genreId}
          platformId={gameQuery.platformId}
        />
        <HStack spacing={5}>
          <PlatformsSelector
            onGameQuery={platformId =>
              setGameQuery({ ...gameQuery, platformId })
            }
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector
            onGameQuery={ordering => setGameQuery({ ...gameQuery, ordering })}
            selectedSortValue={gameQuery.ordering}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;

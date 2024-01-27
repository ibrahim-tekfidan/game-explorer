import { Grid, GridItem, Show, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformsSelector from './components/PlatformsSelector';
import SortSelector from './components/SortSelector';
import { GameQuery } from './store';

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      paddingY={{
        base: 1,
        sm: 3,
        lg: 5,
      }}
      paddingX={{ base: 2, sm: 5, lg: 7 }}
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
        <GridItem marginTop={8} area={'aside'}>
          <GenreList
            onGameQuery={genreId => setGameQuery({ ...gameQuery, genreId })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameHeading
          genreId={gameQuery.genreId}
          platformId={gameQuery.platformId}
        />
        <Stack
          display={'flex'}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 3, md: 5 }}
        >
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
        </Stack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;

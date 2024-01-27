import { Grid, GridItem, Show, Stack } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformsSelector from './components/PlatformsSelector';
import SortSelector from './components/SortSelector';

const App = () => {
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem marginTop={8} area={'aside'}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameHeading />
        <Stack
          display={'flex'}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 3, md: 5 }}
        >
          <PlatformsSelector />
          <SortSelector />
        </Stack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;

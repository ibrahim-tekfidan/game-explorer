import { Grid, GridItem, Show, Stack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';
import PlatformsSelector from '../components/PlatformsSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      as={'main'}
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
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

export default HomePage;

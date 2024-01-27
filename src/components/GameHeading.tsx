import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform ? platform.name : ''} ${
    genre ? genre.name : ''
  } Games`;

  return (
    <Heading
      marginY={4}
      fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '5xl' }}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;

import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
  genreId?: number;
  platformId?: number;
}

const GameHeading = ({ genreId, platformId }: Props) => {
  const genre = useGenre(genreId);
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

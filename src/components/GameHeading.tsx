import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  genreId?: number;
  platformId?: number;
}

const GameHeading = ({ genreId, platformId }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find(g => g.id === genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find(p => p.id === platformId);

  const heading = `${platform ? platform.name : ''} ${
    genre ? genre.name : ''
  } Games`;

  return (
    <Heading marginY={4} fontSize={'6xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

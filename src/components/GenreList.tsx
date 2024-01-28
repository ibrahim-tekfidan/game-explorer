import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/img-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={'3xl'} marginBottom={6}>
        Genres
      </Heading>
      <List display={'flex'} flexDirection={'column'} spacing={2}>
        {genres?.results.map(genre => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                alt={genre.name + ' image'}
                objectFit={'cover'}
                borderRadius={8}
                boxSize={10}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={'xl'}
                variant={'link'}
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

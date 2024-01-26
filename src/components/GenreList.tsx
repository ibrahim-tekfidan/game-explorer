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

interface Props {
  onGameQuery: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onGameQuery, selectedGenreId }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

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
                objectFit={'cover'}
                borderRadius={8}
                boxSize={10}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                onClick={() => onGameQuery(genre.id)}
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

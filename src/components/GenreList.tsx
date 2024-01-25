import { List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres?.results.map(genre => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenreList;

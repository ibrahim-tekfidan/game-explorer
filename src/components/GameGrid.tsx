import { List, ListItem, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();

  if (error) return <Text>{error.message}</Text>;

  return (
    <List>
      {games?.results.map(game => (
        <ListItem key={game.id}>{game.name}</ListItem>
      ))}
    </List>
  );
};

export default GameGrid;

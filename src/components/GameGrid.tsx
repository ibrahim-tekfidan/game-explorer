import { List, ListItem, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Game {
  id: number;
  name: string;
}

interface FetchResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
  } = useQuery<FetchResponse, Error>({
    queryKey: ['games'],
    queryFn: () =>
      axios
        .get<FetchResponse>('https://api.rawg.io/api/games', {
          params: {
            key: '23c04f385a524de09a778b762ce1c462',
          },
        })
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

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

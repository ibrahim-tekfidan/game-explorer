import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacingX={6}
      spacingY={10}
      paddingY={6}
      paddingX={10}
    >
      {isLoading && skeletons.map(s => <GameSkeleton key={s} />)}
      {games?.results.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

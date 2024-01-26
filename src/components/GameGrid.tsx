import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import PlatformsSelector from './PlatformsSelector';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
  onGameQuery: (platformId: number) => void;
}

const GameGrid = ({ gameQuery, onGameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box paddingX={6}>
      <PlatformsSelector
        selectedPlatformId={gameQuery.platformId}
        onGameQuery={onGameQuery}
      />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacingX={4}
        spacingY={6}
        paddingY={8}
      >
        {isLoading &&
          skeletons.map(s => (
            <GameCardContainer key={s}>
              <GameSkeleton />
            </GameCardContainer>
          ))}
        {games?.results.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;

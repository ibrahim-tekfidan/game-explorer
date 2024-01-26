import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import PlatformsSelector from './PlatformsSelector';

interface Props {
  selectedGenreId?: number;
  selectedPlatformId?: number;
  onSelectedPlatformId: (platformId: number) => void;
}

const GameGrid = ({
  selectedGenreId,
  selectedPlatformId,
  onSelectedPlatformId,
}: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenreId, selectedPlatformId);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <PlatformsSelector onSelectedPlatformId={onSelectedPlatformId} />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacingX={4}
        spacingY={6}
        paddingY={8}
        paddingX={6}
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
    </>
  );
};

export default GameGrid;

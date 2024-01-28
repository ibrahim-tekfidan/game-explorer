import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenShots from '../hooks/useScreenShots';
import { Game } from '../entities/Game';

interface Props {
  game: Game;
}

const GameScreenShots = ({ game }: Props) => {
  const { data: screentShots, error, isLoading } = useScreenShots(game.id);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 1, md: 2 }}>
      {screentShots?.results.map(screentShoot => (
        <Image
          src={screentShoot.image}
          alt={game.name + ' image'}
          key={screentShoot.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;

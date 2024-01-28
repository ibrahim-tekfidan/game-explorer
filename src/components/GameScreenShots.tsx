import React from 'react';
import useScreenShots from '../hooks/useScreenShots';
import { SimpleGrid, Image } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data: screentShots, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: 1, md: 2 }}
    >
      {screentShots?.results.map(screentShoot => (
        <Image src={screentShoot.image} key={screentShoot.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;

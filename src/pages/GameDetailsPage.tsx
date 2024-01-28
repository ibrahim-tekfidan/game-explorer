import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpendableText from '../components/ExpendableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenShots from '../components/GameScreenShots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';
import BackToGamesButton from '../components/BackToGamesButton';

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <BackToGamesButton />
      <SimpleGrid columns={{ base: 1, md: 2 }} marginTop={3} spacing={5}>
        <GridItem>
          <Heading marginBottom={2}>{game.name}</Heading>
          <ExpendableText>{game.description_raw}</ExpendableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenShots game={game} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;

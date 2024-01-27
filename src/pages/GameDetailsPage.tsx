import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Text, Spinner } from '@chakra-ui/react';

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;

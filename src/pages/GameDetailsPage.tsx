import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Text, Spinner } from '@chakra-ui/react';
import ExpendableText from '../components/ExpendableText';

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
    </>
  );
};

export default GameDetailsPage;

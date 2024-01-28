import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Heading, Text, Spinner, SimpleGrid } from '@chakra-ui/react';
import ExpendableText from '../components/ExpendableText';
import DefinitionItem from '../components/DefinitionItem';
import CriticScore from '../components/CriticScore';

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
      <SimpleGrid columns={2}>
        <DefinitionItem term="Genres">
          {game.genres.map(genre => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Publishers">
          {game.publishers?.map(publisher => (
            <Text>{publisher.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          {<CriticScore score={game.metacritic} />}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;

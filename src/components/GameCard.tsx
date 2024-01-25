import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconLists';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/img-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody alignContent={'space-between'}>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading marginTop={3} fontSize={'2xl'}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

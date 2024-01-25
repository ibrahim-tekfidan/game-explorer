import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconLists';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card boxShadow={'xl'} borderRadius={8} overflow={'hidden'}>
      <Image src={game.background_image} />
      <CardBody>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        />
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

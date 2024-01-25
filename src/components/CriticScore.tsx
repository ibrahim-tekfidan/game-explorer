import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge fontSize={'md'} borderRadius={4} colorScheme="green" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;

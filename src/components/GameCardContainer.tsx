import { Card, transition } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Card
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
      boxShadow={'xl'}
      borderRadius={8}
      overflow={'hidden'}
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;

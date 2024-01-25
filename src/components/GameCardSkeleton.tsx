import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameSkeleton = () => {
  return (
    <Card width={'325px'} boxShadow={'xl'} borderRadius={8} overflow={'hidden'}>
      <Skeleton height={'225px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameSkeleton;

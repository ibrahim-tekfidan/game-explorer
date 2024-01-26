import { CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const GameSkeleton = () => {
  return (
    <>
      <Skeleton height={'225px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </>
  );
};

export default GameSkeleton;

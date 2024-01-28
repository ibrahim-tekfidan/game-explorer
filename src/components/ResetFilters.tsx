import useGameQueryStore from '../store';
import { Button, Flex } from '@chakra-ui/react';

const ResetFilters = () => {
  const resetGameQuery = useGameQueryStore(s => s.setGameQuery);
  return (
    <>
      <Button onClick={() => resetGameQuery()}>Reset Filters</Button>
    </>
  );
};

export default ResetFilters;

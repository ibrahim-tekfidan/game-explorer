import { Box, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [expended, setExpended] = useState(false);

  if (!children) return null;

  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expended ? children : children.substring(0, limit) + '...';

  return (
    <Text
      fontSize={{ base: '14px', md: '18px' }}
      lineHeight={{ base: '1.4', md: '1.6' }}
    >
      {summary}
      <Button
        size={{ base: 'xs', md: 'sm' }}
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpended(!expended)}
      >
        {expended ? 'Show less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExpendableText;

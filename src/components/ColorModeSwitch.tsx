import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between">
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        size={'md'}
        onChange={() => toggleColorMode()}
      />
      <Text whiteSpace={'nowrap'}>
        {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;

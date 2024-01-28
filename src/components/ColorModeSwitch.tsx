import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between">
      <IconButton
        aria-label="Toggle theme color"
        onClick={toggleColorMode}
        variant={'ghost'}
        children={
          colorMode === 'dark' ? (
            <FaSun size={'24px'} />
          ) : (
            <FaMoon size={'24px'} />
          )
        }
      ></IconButton>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        size={'md'}
        onChange={() => toggleColorMode()}
      />
      <Text whiteSpace={'nowrap'}>
        {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </Text> */}
    </HStack>
  );
};

export default ColorModeSwitch;

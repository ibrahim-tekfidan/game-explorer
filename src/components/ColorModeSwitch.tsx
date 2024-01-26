import { Button, HStack, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between">
      <Button
        onClick={toggleColorMode}
        variant={'ghost'}
        children={
          colorMode === 'dark' ? (
            <FaSun size={'24px'} />
          ) : (
            <FaMoon size={'24px'} />
          )
        }
      ></Button>
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

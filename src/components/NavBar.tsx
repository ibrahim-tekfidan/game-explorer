import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack padding={2} justifyContent={'space-between'}>
      <Image boxSize="64px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

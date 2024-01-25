import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image boxSize="64px" src={logo} />
    </HStack>
  );
};

export default NavBar;

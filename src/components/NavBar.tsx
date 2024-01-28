import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack as={'header'} justifyContent={'space-between'}>
      <Link to="/">
        <Image
          alt={'Logo'}
          objectFit={'cover'}
          boxSize={{ base: '48px', lg: '64px' }}
          src={logo}
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

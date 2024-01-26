import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onGameQuery: (searchText: string) => void;
}

const NavBar = ({ onGameQuery }: Props) => {
  return (
    <HStack justifyContent={'space-between'}>
      <Image boxSize={{ base: '48px', lg: '64px' }} src={logo} />
      <SearchInput onGameQuery={onGameQuery} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectedPlatformId: (platformId: number) => void;
}

const PlatformsSelector = ({ onSelectedPlatformId }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem
            onClick={() => onSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;

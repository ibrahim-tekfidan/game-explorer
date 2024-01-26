import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  selectedPlatformId?: number;
  onGameQuery: (platformId: number) => void;
}

const PlatformsSelector = ({ selectedPlatformId, onGameQuery }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    platform => platform.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton textAlign={'left'} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem
            fontSize={'lg'}
            onClick={() => onGameQuery(platform.id)}
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

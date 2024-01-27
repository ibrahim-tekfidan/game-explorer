import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const selectedSortValue = useGameQueryStore(s => s.gameQuery.ordering);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const selectedSort = sortOrders.find(s => s.value === selectedSortValue);

  return (
    <Menu>
      <MenuButton textAlign={'left'} as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort ? selectedSort.label : ''}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem
            fontSize={'lg'}
            key={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

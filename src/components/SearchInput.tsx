import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore(s => s.setSearchText);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (searchRef.current && searchRef.current.value)
          setSearchText(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />

        <Input
          ref={searchRef}
          borderRadius={100}
          variant="filled"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

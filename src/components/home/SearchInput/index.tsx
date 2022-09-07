import { Input } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { useState } from 'react';

const useSearchInput = () => {
  const [search, setSearch] = useState<string>();

  return {
    search,
    setSearch,
  };
};

const SearchInput = () => {
  const { search } = useSearchInput();

  return (
    <Input
      classNames={{
        input: 'element-bg',
        icon: 'element-color',
      }}
      icon={<MagnifyingGlassIcon width={20} height={20} />}
      radius="md"
      size="xl"
      placeholder="Search for a country..."
    />
  );
};

export default SearchInput;

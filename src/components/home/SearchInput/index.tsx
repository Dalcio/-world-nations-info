import { Input } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { FormEvent } from 'react';
import useStore from 'store';

const SearchInput = () => {
  const onSearchCountry = useStore((s) => s.searchCountry);
  const currentSearch = useStore((s) => s.currentSearch);

  return (
    <Input
      classNames={{ input: 'element-bg', icon: 'element-color' }}
      style={{ flexGrow: 0.2 }}
      icon={<MagnifyingGlassIcon width={20} height={20} />}
      radius="md"
      size="xl"
      value={currentSearch}
      placeholder="Search for a country..."
      onChange={(evt: FormEvent<HTMLInputElement>) => onSearchCountry(evt.currentTarget.value)}
    />
  );
};

export default SearchInput;

import { Stack } from '@mantine/core';
import { Countries, Filter, SearchInput } from 'components/home';

const HomePage = () => (
  <Stack p="md">
    <SearchInput />
    <Filter />
    <Countries />
  </Stack>
);

export default HomePage;

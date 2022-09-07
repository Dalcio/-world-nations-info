import { SimpleGrid, Stack } from '@mantine/core';
import { Countries, Filter, SearchInput } from 'components/home';

const HomePage = () => (
  <Stack p="md" spacing="xl">
    <SimpleGrid
      cols={2}
      spacing="lg"
      mb="md"
      sx={({ fn }) => ({
        alignItems: 'center',
        [fn.largerThan('md')]: {
          justifyContent: 'space-between',
          gridTemplateColumns: '0.6fr auto',
        },
      })}
      breakpoints={[{ maxWidth: 'md', cols: 1 }]}
    >
      <SearchInput />
      <Filter />
    </SimpleGrid>
    <Countries />
  </Stack>
);

export default HomePage;

import { SimpleGrid, Stack } from '@mantine/core';
import { Countries, FilterByRegion, SearchInput } from 'components/home';
import { API_ENDPOINT } from 'constants/env';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { TCountry } from 'rest-countries';
import { useHydrateStore } from 'store/index';

export const getStaticProps: GetStaticProps = async () => {
  let countries: TCountry[] = [];

  try {
    const res = await fetch(`${API_ENDPOINT}all`);
    countries = await res.json();
  } catch (error) {
    countries = [];
  }

  return {
    props: {
      countries,
    },
  };
};

const HomePage = ({ countries }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useHydrateStore(countries);

  return (
    <Stack spacing="xl">
      <SimpleGrid
        cols={2}
        spacing="lg"
        mb="md"
        sx={({ fn }) => ({
          alignItems: 'center',
          [fn.largerThan('md')]: {
            justifyContent: 'space-between',
            gridTemplateColumns: '0.6fr 300px',
          },
        })}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        <SearchInput />
        <FilterByRegion />
      </SimpleGrid>
      <Countries />
    </Stack>
  );
};

export default HomePage;

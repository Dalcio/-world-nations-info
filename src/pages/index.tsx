import { Box, SimpleGrid, Stack } from '@mantine/core';
import { Countries, FilterByRegion, SearchInput } from 'components/home';
import { API_ENDPOINT } from 'constants/env';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { TCountry } from 'rest-countries';
import { useHydrateStore } from 'store/index';
import { Row } from 'theme/restyled';

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
      <Row
        justify="center"
        className="bg"
        sx={({ spacing }) => ({
          position: 'fixed',
          top: `${82}px`,
          left: 0,
          right: 0,
          paddingTop: `${spacing.md + spacing.xl}px`,
          paddingBottom: `${spacing.md}px`,
          zIndex: 1,
        })}
      >
        <SimpleGrid
          cols={2}
          spacing="lg"
          mb="md"
          sx={({ fn, spacing }) => ({
            alignItems: 'center',
            padding: `0 ${spacing.md + spacing.xl}px`,
            width: 'min(100%, 1400px)',
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
      </Row>
      <Box
        sx={({ fn, spacing }) => ({
          marginTop: `${212 - spacing.lg}px`,
          [fn.largerThan('md')]: {
            marginTop: `${132 - spacing.lg}px`,
          },
        })}
      >
        <Countries />
      </Box>
    </Stack>
  );
};

export default HomePage;

import { SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import useStore from 'store/index';
import CountryCard from './CountryCard';

const Countries = () => {
  const countries = useStore((s) => s.countries);
  const filteredCountries = useStore((s) => s.filteredCountries);
  const currentRegion = useStore((s) => s.currentRegion);
  const currentSearch = useStore((s) => s.currentSearch);
  const { spacing } = useMantineTheme();

  return (
    (filteredCountries.length === 0 && currentSearch && currentRegion && (
      <Title pt="xl" align="center">
        There is no country
      </Title>
    )) || (
      <SimpleGrid
        cols={4}
        px="xl"
        spacing={spacing.md + spacing.xl}
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'sm', cols: 1 },
        ]}
      >
        {(
          (filteredCountries.length > 0 && filteredCountries) ||
          (currentSearch && currentRegion && []) ||
          countries
        ).map(({ name, flags, population, region, capital }) => (
          <CountryCard
            key={uuid()}
            name={name.common}
            flag={flags.svg}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </SimpleGrid>
    )
  );
};

export default Countries;

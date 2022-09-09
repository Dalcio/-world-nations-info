import { Stack, Title } from '@mantine/core';
import Country from 'components/Country';
import BackButton from 'components/Country/BackButton';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStore from 'store';

const CountryPage = () => {
  const country = useStore((s) => s.country);
  const getCountry = useStore((s) => s.getCountry);
  const { query } = useRouter();

  useEffect(() => {
    if (!country) {
      getCountry(query.name as string);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{(country && country.name?.official) || 'Not Found'}</title>
      </Head>
      <Stack align="flex-start">
        <BackButton />
        {(country && <Country data={country} />) || (
            <Title>The country {query.name} does not exist </Title>
          ) ||
          null}
      </Stack>
    </>
  );
};

export default CountryPage;

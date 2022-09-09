import { Button, Grid, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { TCountry } from 'rest-countries';
import useStore from 'store';
import { Row } from 'theme/restyled';
import Info from './Info';
import { getNativeName, getCurrencies, getLanguages } from './utils';

type CountryProps = {
  data: TCountry;
};

const Country = ({ data }: CountryProps) => {
  const getCountry = useStore((s) => s.getCountry);

  return (
    <SimpleGrid
      mt="xl"
      cols={2}
      spacing={50}
      breakpoints={[{ maxWidth: 'md', cols: 1, spacing: 'xl' }]}
    >
      <Image src={data.flags?.svg} alt={`Flag of ${data.name.common ?? ''}`} radius="md" mb="md" />
      <Stack>
        <Title mb="lg">{data.name.common}</Title>
        <Grid mt="xl" grow>
          <Grid.Col md={3}>
            <Info label="Native Name" value={getNativeName(data.name.nativeName)} />
            <Info label="Population" value={data.population} />
            <Info label="Region" value={data.region} />
            <Info label="Sub Region" value={data.subregion} />
            <Info
              label={data.capital && data.capital.length > 1 ? 'Capitals' : 'Capital'}
              value={data.capital && data.capital.join(',')}
            />
          </Grid.Col>

          <Grid.Col md={3}>
            <Info label="Top Level Domain" value={data.tld.join(',')} />
            <Info label="Currencies" value={data.currencies && getCurrencies(data.currencies)} />
            <Info label="Languages" value={data.languages && getLanguages(data.languages)} />
          </Grid.Col>

          <Grid.Col>
            <Stack
              spacing="sm"
              mt="xl"
              sx={({ fn }) => ({
                [fn.largerThan('md')]: {
                  flexDirection: 'row',
                  alignItems: 'start',
                },
              })}
            >
              <Text
                p={0}
                weight={600}
                sx={({ fn }) => ({ [fn.largerThan('md')]: { width: '150px' } })}
              >
                Border Countries
              </Text>
              <Row
                style={{ flexWrap: 'wrap' }}
                mt="md"
                sx={({ fn }) => ({ [fn.largerThan('md')]: { marginTop: 0 } })}
              >
                {data.borders &&
                  data.borders.length > 0 &&
                  data.borders.map((border) => (
                    <Link href={`/country/${border}`} passHref key={border}>
                      <Button
                        component="a"
                        size="lg"
                        radius="md"
                        className="element-bg"
                        onClick={() => getCountry(border)}
                        type="submit"
                      >
                        {border}
                      </Button>
                    </Link>
                  ))}
              </Row>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </SimpleGrid>
  );
};

export default Country;

import { Card, Image, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

type CountryCardProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
};

type CardInfoProps = {
  label: 'Capital' | 'Population' | 'Region';
  value: string | number;
};

const CardInfo = ({ label, value }: CardInfoProps) => (
  <Text weight={500} size="lg" mt={0}>
    <strong>{label}</strong> {value}
  </Text>
);

const CountryCard = ({ capital, flag, name, population, region }: CountryCardProps) => (
  <Link href={`/country/${name}`} passHref>
    <Card radius="md" shadow="sm" p="xl" component="a">
      <Card.Section>
        <Image src={flag} alt={`flag of ${name}`} />
      </Card.Section>

      <Stack m="md" mt="xl" spacing="sm">
        <h2>{name}</h2>
        <CardInfo label="Population" value={population} />
        <CardInfo label="Region" value={region} />
        <CardInfo label="Capital" value={capital.join(',')} />
      </Stack>
    </Card>
  </Link>
);

export default CountryCard;

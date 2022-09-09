import { Text } from '@mantine/core';

type InfoProps = {
  label: string;
  value: string | number;
};

const Info = ({ label, value }: InfoProps) => (
  <Text weight={500} size="lg" mt={0}>
    <strong>{label}</strong> {value}
  </Text>
);

export default Info;

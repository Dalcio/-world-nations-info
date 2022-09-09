import { Button } from '@mantine/core';
import { ChevronLeftIcon } from '@modulz/radix-icons';
import Link from 'next/link';

const BackButton = () => (
  <Link href="/" passHref>
    <Button
      component="a"
      leftIcon={<ChevronLeftIcon width={20} height={20} />}
      size="lg"
      radius="md"
      className="element-bg"
    >
      Back
    </Button>
  </Link>
);

export default BackButton;

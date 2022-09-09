import { Button, Text, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Button
      onClick={() => toggleColorScheme()}
      size="lg"
      variant="subtle"
      color="dark"
      sx={() => ({
        padding: 0,
        '&:hover': {
          backgroundColor: 'transparent',
          opacity: 0.6,
        },
      })}
      leftIcon={
        colorScheme === 'dark' ? (
          <SunIcon width={20} height={20} />
        ) : (
          <MoonIcon width={20} height={20} />
        )
      }
    >
      {colorScheme === 'dark' ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}
    </Button>
  );
};

export default ColorSchemeToggle;

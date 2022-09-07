import { createStyles, Text } from '@mantine/core';
import React from 'react';
import { Row } from 'theme/restyled';
import ColorSchemeToggle from './ColorSchemeToggle';

const useHeaderStyles = createStyles(({ colors }) => ({
  wrapper: {
    width: '100%',
    boxShadow: `0 1px 2px 0px ${colors.darkBlue[0]}`,
  },
  container: {
    width: 'min(100%, 1200px)',
  },
}));

const Header = () => {
  const { classes } = useHeaderStyles();

  return (
    <Row justify="center" className={`element-bg ${classes.wrapper}`} px="lg" py="md">
      <Row className={classes.container} justify="space-between" align="center">
        <Text>Where in the World?</Text>
        <ColorSchemeToggle />
      </Row>
    </Row>
  );
};

export default Header;

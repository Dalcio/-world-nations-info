import { createStyles, Stack } from '@mantine/core';
import React from 'react';
import Header from './Header';

type TLayout = {
  children: JSX.Element[] | JSX.Element;
};

const useLayoutStyles = createStyles(({ spacing }) => ({
  appContainer: {
    width: '100%',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    justifyItems: 'center',
  },
  main: {
    width: 'min(100%, 1400px)',
    padding: `${spacing.md + spacing.xl}px`,
    marginTop: '82px',
  },
}));

const Layout = ({ children }: TLayout) => {
  const { classes } = useLayoutStyles();

  return (
    <div className={classes.appContainer}>
      <Header />
      <Stack className={classes.main}>{children}</Stack>
    </div>
  );
};

export default Layout;

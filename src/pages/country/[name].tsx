import { AppProps } from 'next/app';
import React from 'react';

export const getStaticServerSide = () => {};

const Country = ({ router }: AppProps) => {
  const name = router.basePath;

  return <div>Country: {name}</div>;
};

export default Country;

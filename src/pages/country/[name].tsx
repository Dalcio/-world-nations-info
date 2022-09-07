import Head from 'next/head';
import { useRouter } from 'next/router';

export const getStaticServerSide = () => {};

const Country = () => {
  const { name } = useRouter().query;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>Country: {name}</h1>;
    </>
  );
};

export default Country;

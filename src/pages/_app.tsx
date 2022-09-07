import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { APP_NAME } from 'constants/env';
import { getCookie } from 'cookies-next';
import useToggleColorScheme from 'hooks/useToggleColorScheme';
import Layout from 'layout';
import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'theme';
import GlobalStyles from 'theme/globalStyles';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const { colorScheme, toggleColorScheme } = useToggleColorScheme(props.colorScheme);

  return (
    <>
      <Head>
        <title>World&apos;s Nations Info</title>
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            ...theme,
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie(APP_NAME, ctx) || 'light',
});

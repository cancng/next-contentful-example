import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NP from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '../components/Layout';
import { useApollo } from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';

Router.events.on('routeChangeStart', () => NP.start());
Router.events.on('routeChangeComplete', () => NP.done());
Router.events.on('routeChangeError', () => NP.done());

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

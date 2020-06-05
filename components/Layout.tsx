import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';


const Main = styled.main`
  max-width: 1400px;
  margin: 0 auto 2rem;
  padding: 0 2rem;
`;

interface Props {
  title?: string;
  children: JSX.Element;
}

const Layout = ({
  children,
  title = 'Blog',
}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default Layout;

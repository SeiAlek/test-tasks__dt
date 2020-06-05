import * as React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ 
  children,
  title = 'Blog',
 }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;
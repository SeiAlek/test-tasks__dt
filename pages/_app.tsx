import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { fetchPosts } from '../helpers/api';
import { wrapper } from '../store';
import { setPosts } from '../store/posts';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
`;

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts()
      .then((posts: Post[]) => dispatch(setPosts(posts)));
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(WrappedApp);

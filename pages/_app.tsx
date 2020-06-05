import { AxiosResponse } from 'axios';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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

const theme = {};

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts()
      .then((response: AxiosResponse<Post[]>) => dispatch(setPosts(response.data)));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>

  );
};

export default wrapper.withRedux(WrappedApp);

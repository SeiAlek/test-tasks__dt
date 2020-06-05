import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { getPostsByDate } from '../../store';

const WithStaticProps = (): JSX.Element => {
  const posts = useSelector(getPostsByDate);

  return (
    <Layout title="Posts List">
      <>
        <h1>Posts</h1>
        <PostList posts={posts} />
      </>
    </Layout>
  );
};

export default WithStaticProps;

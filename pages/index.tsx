import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { getLastPosts } from '../store';

const Index = (): JSX.Element => {
  const posts = useSelector(getLastPosts);
 
  return (
    <Layout>
      <>
        <h1>Newest Posts</h1>
        <PostList posts={posts} />
      </>
    </Layout>
  )
}

export default Index;
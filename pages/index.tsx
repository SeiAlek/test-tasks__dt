import React from 'react';
import Layout from '../components/Layout';
import { useSelector } from 'react-redux';
import { getNewestPosts } from '../store';
import PostList from '../components/PostList';

const Index = (): JSX.Element => {
  const posts = useSelector(getNewestPosts);
 
  return (
    <Layout>
      <h1>Newest Posts</h1>
      <PostList posts={posts} />
    </Layout>
  )
}

export default Index;
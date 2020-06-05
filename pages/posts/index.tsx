import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import { getPosts } from '../../store';

const WithStaticProps = () => {
  const posts = useSelector(getPosts);

  return (
    <Layout title="Posts List">
      <h1>Posts</h1>
      <PostList posts={posts} />
    </Layout>
  );
};

export default WithStaticProps;

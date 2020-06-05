import React from 'react';
import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';
import { fetchPostWithComments } from '../../helpers/api';
import { NextPageContext } from 'next';

interface Props {
  post: Post;
}

const StaticPropsDetail = ({ post }: Props): JSX.Element => {
  const { title } = post;

  return (
    <Layout title={title}>
      <PostDetail post={post} />
    </Layout>
  );
};

interface Context extends NextPageContext {
  id: number;
}

StaticPropsDetail.getInitialProps = async (context: Context) => {
  const post = await fetchPostWithComments(Number(context.query.id));

  return { post: post };
};

export default StaticPropsDetail;

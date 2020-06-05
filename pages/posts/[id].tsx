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
  const response = await fetchPostWithComments(Number(context.query.id));

  return { post: response.data };
};

export default StaticPropsDetail;

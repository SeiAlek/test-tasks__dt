import React from 'react';
import Layout from '../components/Layout';
import FormAddPost from '../components/FormAddPost';

const AddPost = (): JSX.Element => (
  <Layout title="Add New Post">
    <>
      <h1>
        AddPost
      </h1>
      <FormAddPost />
    </>
  </Layout>
);

export default AddPost;
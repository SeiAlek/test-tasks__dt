import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AxiosResponse } from 'axios';
import { sendPost, fetchPosts } from '../helpers/api';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import { setPosts } from '../store/posts';
import FormButton from './Button';

const Form = styled.form`
  max-width: 20rem;
  margin: 0 auto;
  padding: 0 0 1rem;
`;

const FormAddPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!postTitle.trim() && !postBody.trim()) {
      return;
    }

    sendPost(postTitle, postBody)
      .then(res => console.log(res))
      .catch(err => console.error(err))

    setPostTitle('');
    setPostBody('');
    fetchPosts()
      .then((response: AxiosResponse<Post[]>) => dispatch(setPosts(response.data)));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="title"
        id="postTitle"
        placeholder="Post Title"
        value={postTitle}
        onChange={setPostTitle}
      />
      <FormTextarea
        name="body"
        id="postBody"
        placeholder="Your Post"
        value={postBody}
        onChange={setPostBody}
      />      
      <FormButton 
        type="submit"
        name="Send post"
        id="send-post"
        onClick={handleSubmit}
      />
    </Form>
  );
}

export default FormAddPost;
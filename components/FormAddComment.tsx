import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchPosts, sendComment } from '../helpers/api';
import { setPosts } from '../store/posts';
import FormButton from './Button';
import FormTextarea from './FormTextarea';

const Form = styled.form`
  max-width: 20rem;
  margin: 0 auto;
  padding: 0 0 1rem;
`;

interface Props {
  postId: number;
}

const FormAddComment = ({ postId }: Props): JSX.Element => {
  const [commentBody, setCommentBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!commentBody.trim()) {
      return;
    }

    sendComment(postId, commentBody)
      .then(() => fetchPosts())
      .then((posts: Post[]) => dispatch(setPosts(posts)))
      .catch(err => console.error(err))
      .finally(() => {
        setCommentBody('');
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormTextarea
        name="body"
        id="postBody"
        placeholder="Your Post"
        value={commentBody}
        onChange={setCommentBody}
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

export default FormAddComment;
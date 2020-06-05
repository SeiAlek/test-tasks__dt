import React from 'react';
import styled from 'styled-components';
import FormAddComment from './FormAddComment';

const Text = styled.section`
  padding: 2rem 0 4rem;
`;

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props): JSX.Element => {
  const { id, title, body, comments } = post;

  return (
    <article>
      <h1>{title}</h1>
      {body && (
        <Text>
          {body}
        </Text>
      )}
      <FormAddComment postId={id} />
      {comments && comments.length > 0 && (
        <>
          <h3>Comments:</h3>
          <ul>
            {comments.map(({ id, body}) => (
              <li key={id}>
                {body}
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  )
}

export default PostDetail;

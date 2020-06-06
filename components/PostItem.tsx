import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem 2rem;
  overflow: hidden;
  transition: transform;
`;

const A = styled.a.attrs(() => ({ tabIndex: 0 }))`
  color: #000;
  text-decoration: none;
  font-size: 2rem;
  transition: color 0.3s;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props): JSX.Element => {
  const { id, title } = post;

  return (
    <Container>
      <Link href="/posts/[id]" as={`/posts/${id}`}>
        <A>
          {title}
        </A>
      </Link>
    </Container>
  )
};

export default PostItem;

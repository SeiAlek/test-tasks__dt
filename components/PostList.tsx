import React from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 1rem;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  background-color: #fff;
  box-shadow: 0 3px 13px rgba(23, 32, 49, .26);
  height: 10rem;
  overflow: hidden;
`;

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props): JSX.Element => (
  <Container>
    {posts.map((post) => (
      <Item key={post.id}>
        <PostItem post={post} />
      </Item>
    ))}
  </Container>
)

export default PostList;
import React from 'react';
import PostItem from './PostItem';

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props): JSX.Element => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <PostItem post={post} />
      </li>
    ))}
  </ul>
)

export default PostList;
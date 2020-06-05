import React from 'react';
import PostItem from './PostItem';

type Props = {
  posts: Post[]
}

const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <PostItem post={post} />
      </li>
    ))}
  </ul>
)

export default PostList;
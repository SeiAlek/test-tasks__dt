import React from 'react';
import Link from 'next/link';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props): JSX.Element => (
  <Link href="/posts/[id]" as={`/posts/${post.id}`}>
    <a>
      {post.id}: {post.title}
    </a>
  </Link>
);

export default PostItem;

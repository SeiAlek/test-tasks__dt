import React from 'react';
import Link from 'next/link';

type Props = {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => (
  <Link href="/posts/[id]" as={`/posts/${post.id}`}>
    <a>
      {post.id}: {post.title}
    </a>
  </Link>
);

export default PostItem;

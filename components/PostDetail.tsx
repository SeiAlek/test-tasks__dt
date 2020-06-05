import React from 'react';

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props): JSX.Element => {
  const { title, body, comments } = post;

  return (
    <article>
      <h1>{title}</h1>
      {body && (
        <section>
          {body}
        </section>
      )}
      {comments && (
        <ul>
          {comments.map(({ id, body}) => (
            <li key={id}>
              {body}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default PostDetail;

import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as api from '../helpers/api';
import * as store from '../store/posts';
import Router from 'next/router'

const Delete = styled.button.attrs(() => ({ tabIndex: 0 }))`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0.5rem;
  top: 0.5rem;
  min-width: 1rem;
  min-height: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  color: red;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  opacity: 0.3;
  transition: all 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #fff;
    background: red;
    opacity: 1;
  }
`;

interface Props {
  postId: number;
  buttonText: string;
  redirectUrl?: string;
}

const PostRemove = ({ postId, buttonText }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const deletePost = (postId: number) => {
    api.removePost(postId)
      .then(() => api.fetchPosts())
      .then((posts: Post[]) => dispatch(store.setPosts(posts)))
      .then(() => Router.push('/posts'))
      .catch(err => console.error(err))
  }

  return (
    <Delete onClick={() => deletePost(postId)}>
      {buttonText}
    </Delete>
  )
}

export default PostRemove;
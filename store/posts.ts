import { Action } from 'redux';

const SET_POSTS = 'SET_POSTS';
const PostState: Post[] = [];

export type SetPosts = Action<typeof SET_POSTS> & { posts: Post[] };
export const setPosts = (posts: Post[]): SetPosts => ({
  type: SET_POSTS,
  posts,
});

const reducer = (posts = PostState, action: SetPosts): Post[] => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    default:
      return posts;
  }
};

export default reducer;

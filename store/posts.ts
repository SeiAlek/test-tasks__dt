import { Action, AnyAction } from 'redux';

const SET_POSTS = 'SET_POSTS';

export type SetPosts = Action<typeof SET_POSTS> & { posts: Post[] };
type PostState = Post[];

const PostState: Post[] = [];

export const setPosts = (posts: Post[]): SetPosts => ({
  type: SET_POSTS,
  posts,
});

const reducer = (posts = PostState, action: AnyAction): Post[] => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    default:
      return posts;
  }
};

export default reducer;

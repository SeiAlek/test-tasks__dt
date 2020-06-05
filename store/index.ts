import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import postReducer from './posts';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  posts: postReducer,
})

export const getPosts = (state: RootState): Post[] => state.posts;
export const getPostsByDate = createSelector(
  getPosts,
  (posts: Post[]) => [...posts].sort((a, b) => b.id - a.id),
);
export const getLastPosts = createSelector(
  getPostsByDate,
  (posts: Post[]) => [...posts].slice(0, 16),
);

export type RootState = ReturnType<typeof rootReducer>;

const initStore: MakeStore<RootState> = () => (
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
);

export const wrapper = createWrapper<RootState>(initStore);

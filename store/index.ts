import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import postReducer from './posts';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  posts: postReducer,
})

export const getPosts = (state: RootState): Post[] => state.posts;
export const getNewestPosts = createSelector(
  getPosts,
  (posts: Post[]) => [...posts].sort((a, b) => b.id - a.id).slice(0, 12),
);

export type RootState = ReturnType<typeof rootReducer>;
export type PossibleAction = AnyAction;

const reducer = (state: RootState, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.posts) {
      nextState.posts = state.posts;
    }
    return nextState;
  } else {
    return rootReducer(state, action);
  }
}

const initStore: MakeStore<RootState> = () => (
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
);

export const wrapper = createWrapper<RootState>(initStore);

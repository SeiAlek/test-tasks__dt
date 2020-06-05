import { createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createSelector } from 'reselect';
import thunkMiddleware from 'redux-thunk'
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import postReducer from './posts';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootReducer = combineReducers({
  posts: postReducer,
})

export const getPosts = (state: RootState) => state.posts;
export const getNewestPosts = createSelector(
  getPosts,
  (posts: Post[]) => [...posts].sort((a, b) => b.id - a.id).slice(0, 12),
);

export type RootState = ReturnType<typeof rootReducer>;
export type PossibleAction = AnyAction;

const reducer = (state: RootState, action: PossibleAction) => {
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
    return rootReducer(state, action)
  }
}

const initStore: MakeStore<RootState> = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper<RootState>(initStore)

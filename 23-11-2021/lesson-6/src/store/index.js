import { createStore, combineReducers } from 'redux';
import {playersReducer} from "./players/reducer";
import {postsReducer} from "./posts/reducer";


export const store = createStore(
  combineReducers({
    player: playersReducer,
    posts: postsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

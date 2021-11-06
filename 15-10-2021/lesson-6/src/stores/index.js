import { createStore, combineReducers } from 'redux';
import {postsReducer} from "./posts/reducer";



const allReducers = combineReducers({
  posts: postsReducer,
})


export const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

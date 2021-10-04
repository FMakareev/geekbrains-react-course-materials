import { createStore, combineReducers } from 'redux';
import {profileReducer} from "./profile/reducer";
import {postsReducer} from "./posts/reducer";



const allReducers = combineReducers({
  profile: profileReducer,
  posts: postsReducer,
})


export const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

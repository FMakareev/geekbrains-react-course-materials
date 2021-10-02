import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {postsReducer} from "./post/reducer";
import {userReducer} from './user'

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
})

/**
 * либо берем функцию compose из redux devtools либо из библиотеки redux
 * */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
))

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./todos/reducer";
import {newTodos} from "./newTodos";
import {postsReducer, POSTS_REDUCER} from "./posts";

console.log('newTodos: ', newTodos);

const rootReducer = combineReducers({
  todos: todosReducer,
  NEW_TODOS: newTodos.reducer,
  [POSTS_REDUCER]: postsReducer.reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

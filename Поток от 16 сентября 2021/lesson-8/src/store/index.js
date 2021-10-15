import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./todos/reducer";
import { messagesReducer } from "./messages/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  messages: messagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

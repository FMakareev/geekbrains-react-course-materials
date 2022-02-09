import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "./users/reducer";
import {newTodos} from "./newTodos";


const rootReducer = combineReducers({
  users: usersReducer,
  todo: newTodos.reducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

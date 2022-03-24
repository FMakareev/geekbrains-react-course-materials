import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {todoReducer} from './todo/reducer';
import {projectsReducer} from "./projects/reducer";

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__


export const store = createStore(combineReducers({
  todo: todoReducer,
  project: projectsReducer,
}),
  compose(applyMiddleware(thunk))
);

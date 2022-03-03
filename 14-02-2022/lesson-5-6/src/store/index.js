import { createStore, combineReducers } from 'redux';
import {todoReducer} from './todo/reducer';
import {projectsReducer} from "./projects/reducer";

export const store = createStore(combineReducers({
  todo: todoReducer,
  project: projectsReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

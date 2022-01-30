import { createStore,  combineReducers} from 'redux';
import {todoReducer} from "./todo";
import {projectReducer} from "./project/reducer";


export const store = createStore(
  combineReducers({
    tasks: todoReducer,
    projects: projectReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

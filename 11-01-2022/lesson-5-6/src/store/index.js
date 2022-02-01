import { createStore,  combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {todoReducer} from "./todo";
import {projectReducer} from "./project/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
  combineReducers({
    tasks: todoReducer,
    projects: projectReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../ReactotronConfig'

import {todoReducer} from './todo/reducer';
import {projectsReducer} from "./projects/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancer = compose(applyMiddleware(thunk), Reactotron.createEnhancer())

export const store = createStore(combineReducers({
  todo: todoReducer,
  project: projectsReducer,
}),
  enhancer
);

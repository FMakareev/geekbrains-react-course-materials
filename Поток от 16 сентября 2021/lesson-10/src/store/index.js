import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {playersReducer} from "./players";


const rootReducer = combineReducers({
  players: playersReducer,
})
/**
 * либо берем функцию compose из redux devtools либо из библиотеки redux
 * */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createAppStore = () => createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
))

export const store = createAppStore();

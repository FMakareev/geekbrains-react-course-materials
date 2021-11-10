import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {messageReducer} from "./message"; // defaults to localStorage for web


const rootReducer = combineReducers({
  messages: messageReducer
})


/**
 * либо берем функцию compose из redux devtools либо из библиотеки redux
 * */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
))


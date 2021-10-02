import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {messageReducer} from "./message"; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}



const rootReducer = combineReducers({
  messages: messageReducer
})


/**
 * либо берем функцию compose из redux devtools либо из библиотеки redux
 * */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(
  applyMiddleware(thunk),
))

export const persistor = persistStore(store)

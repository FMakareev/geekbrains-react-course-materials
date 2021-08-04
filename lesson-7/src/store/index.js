import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
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
 * пример своего Middleware
 * */
const loggerMiddleware = (store) => (dispatch) => (action) => {
  console.log('[LOGGER]: ', store, dispatch, action)
  return dispatch(action);
}


/**
 * либо берем функцию compose из redux devtools либо из библиотеки redux
 * */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(
  applyMiddleware(loggerMiddleware, thunk),
))

export const persistor = persistStore(store)

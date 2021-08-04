import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import {playersReducer} from "./players";
import {questionsReducer} from "./questions";
import {gameStateReducer} from "./gameState";

const persistConfig = {
    key: 'root',
    storage,
}



const rootReducer = combineReducers({
    players: playersReducer,
    questions: questionsReducer,
    gameState: gameStateReducer,
})

const loggerMiddleware = (store) => (dispatch) => (action) => {

    console.log('[LOGGER]: ',store,dispatch, action)
    return dispatch(action);
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(
  applyMiddleware(loggerMiddleware, thunk),
))

export const persistor = persistStore(store)

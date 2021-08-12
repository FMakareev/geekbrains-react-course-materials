import {createStore, combineReducers} from 'redux';

import {playersReducer} from "./players";


const rootReducer = combineReducers({
  players: playersReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

import {createStore, combineReducers} from 'redux';
import {collectionsReducer} from './collections';
import {cardReducer} from "./cards";


const rootReducer = combineReducers({
  collections: collectionsReducer,
  cards: cardReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
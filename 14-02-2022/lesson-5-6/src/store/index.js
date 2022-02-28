import { createStore } from 'redux';
import {todoReducer} from './todo/reducer';

export const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
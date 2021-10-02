import { createStore } from 'redux';
import {counterReducer} from "./counter/reducer";



export const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

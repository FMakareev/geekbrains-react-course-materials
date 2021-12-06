import { createStore } from 'redux';
import {playersReducer} from "./players/reducer";


export const store = createStore(
  playersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import {createStore, combineReducers} from 'redux';
import {playersReducer} from "./players";
import {questionsReducer} from "./questions";
import {gameStateReducer} from "./gameState";


const rootReducer = combineReducers({
    players: playersReducer,
    questions: questionsReducer,
    gameState: gameStateReducer,
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user/reducer";
import {todoReducer} from "./todo";
import {projectReducer} from "./project/reducer";

const rootReducer = combineReducers({
    user: userReducer,
    tasks: todoReducer,
    projects: projectReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

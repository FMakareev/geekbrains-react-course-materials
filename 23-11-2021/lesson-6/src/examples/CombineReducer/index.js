import {createStore} from './store';
import {counterReducer, INC_TYPE, profileReducer} from './reducer'



const combineReducer = (reducers) => {
  return (state = {}, action) => {
    const newState = {};

    for(let reducerName in reducers) {
      const reducerState = state[reducerName];
      const reducer = reducers[reducerName];

      newState[reducerName] = reducer(reducerState, action);
    }

    return newState;
  }
}


const store = createStore(
  combineReducer({
    counter: counterReducer,
    profile: profileReducer,
  })
);

store.dispatch({})

store.subscribe(() => {
  console.log(store.getState());
})
store.dispatch({
  type: INC_TYPE,
})
store.dispatch({
  type: INC_TYPE,
})
store.dispatch({
  type: INC_TYPE,
})

import {useEffect, useState} from "react";

const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_SETTINGS = 'CHANGE_SETTINGS'

const profile = (state = {name: ''}, action) => {
  switch (action.type) {
    case CHANGE_NAME: {
      return {
        name: action.payload,
      }
    }
    default:
      return state;
  }
}

const settings = (state = {name: ''}, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS: {
      return {
        name: action.payload,
      }
    }
    default:
      return state;
  }
}

const combineReducer = (reducers) => {
  return (state, action) => {
    const newState = {};

    for(let reducerName in reducers){
      newState[reducerName] = reducers[reducerName](
        state[reducerName],
        action
      )
    }

    return newState;
  }
}

const createStore = (reducer) => {
  let state = {};
  let listener = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listener.forEach((fn) => fn());
  }

  const subscribe = (fn) => {
    listener.push(fn);
  }

  const getState = () => state;

  return {
    getState,
    dispatch,
    subscribe,
  }
}


const store = createStore(combineReducer({
  profile: profile,
  settings: settings
}));

console.log(store.getState())
store.dispatch({
  type: '=',
})
console.log(store.getState())
store.dispatch({
  type: CHANGE_NAME,
  payload: 'foo',
})
console.log(store.getState())







export const SimpleRedux = () => {
  const [state, setState] = useState(false);
  const data = store.getState();

  useEffect(() => {
    store.subscribe(()=> {
      console.log('change 4!')
      setState(!state);
    })
  }, [])

  return <div>
    <h1>
      SimpleRedux
    </h1>

  </div>
}



export const createStore = (reducer, initialState = {}) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((fn) => fn());
  }

  const subscribe = (fn) => {
    listeners.push(fn);

    return () => {
      const index = listeners.findIndex((item) => item === fn);
      if (index === -1) {
        return
      }
      listeners = listeners.slice(0, index);
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

const reducer = (state, action) => {
  switch (action?.type){
    case "INC": {
      return {
        counter: state.counter + 1
      }
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, {
  counter: 0,
})

console.log(store);
store.subscribe(() => {
  console.log('update: ',store.getState());
})
store.subscribe(() => {
  console.log('update 2: ',store.getState());
})

store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})


export const SimpleRedux = () => {

  return <div>
    <h1>
      SimpleRedux
    </h1>
  </div>
}

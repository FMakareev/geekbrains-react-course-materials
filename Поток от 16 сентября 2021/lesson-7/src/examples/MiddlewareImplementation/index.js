export const createSimpleRedux = (reducer, initialState) => {

  let state = initialState;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((fn) => fn());
  }

  const subscribe = (fn) => {

    listeners.push(fn);

    const unsubscribe = () => {
      const index = listeners.findIndex((item) => fn === item);

      if (index !== -1) {
        listeners = listeners.slice(0, index);
      }
    }

    return unsubscribe;
  }


  return {
    getState,
    dispatch,
    subscribe,
  }
}

export const profileReducer = (state = {active: true}, action) => {
  console.log('profileReducer');
  switch (action?.type) {
    case 'PROFILE_TOGGLE_ACTIVE': {
      return {
        active: !state.active,
      }
    }
    default: {
      return state;
    }
  }
}

const applyMiddleware = (middleware) => {
  const createStoreWithMiddleware = (createStore) => {
    return (reducer, initialState) => {
      const store = createStore(reducer, initialState);

      return {
        ...store,
        dispatch: (action) => {
          return middleware(store)(store.dispatch)(action)
        }
      }
    }
  }

  return createStoreWithMiddleware;
}

const logger = store => dispatch => action => {
  console.log('LOGGER: ', action, store.getState());

  if (!action.type) {
    console.log('LOGGER: type is not define ');
    return;
  }

  return dispatch(action)
}

const store = applyMiddleware(logger)(createSimpleRedux)(profileReducer)

console.log(store);

store.dispatch({
  type: 'PROFILE_TOGGLE_ACTIVE'
})

store.dispatch({
  type: 'PROFILE_TOGGLE_ACTIVE'
})

store.dispatch({
  type: 'PROFILE_TOGGLE_ACTIVE'
})

store.dispatch({
})
store.dispatch({
})

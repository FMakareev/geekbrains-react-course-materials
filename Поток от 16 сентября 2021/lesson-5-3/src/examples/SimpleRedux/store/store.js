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
      debugger
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

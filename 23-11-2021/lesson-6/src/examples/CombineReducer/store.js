export const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((fn) => fn());
  };

  const subscribe = (fn) => {
    listeners.push(fn);

    const unsubscribe = () => {
      const index = listeners.findIndex((item) => item === fn);

      if (index === -1) {
        return;
      }

      listeners = listeners.slice(0, index);
    };

    return unsubscribe;
  };

  const getState = () => {
    return state;
  };

  return {
    getState,
    dispatch,
    subscribe
  };
};

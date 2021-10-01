import React, {useEffect, useRef, useState} from 'react';
import {createSimpleRedux} from "./store/store";


const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

const counterReducer = (state = {
  count: 0,
}, action) => {
  switch (action?.type) {
    case COUNTER_INCREMENT: {
      return {
        count: state.count + 1
      }
    }
    case COUNTER_DECREMENT: {
      return {
        count: state.count - 1
      }
    }
    default: {
      return state;
    }
  }
}

const store = createSimpleRedux(counterReducer, {
  count: 0
});


export const SimpleRedux = () => {
  const [, setState] = useState(false);
  const {count} = store.getState();
  const unsubscribe = useRef();

  useEffect(() => {
    unsubscribe.current = store.subscribe(() => setState((state) => !state))
  }, [])

  return (
    <div>
      {count}
      <button onClick={() => {
        unsubscribe.current()
      }}>
        unsubscribe
      </button>
      <button onClick={() => {
        store.dispatch({
          type: COUNTER_INCREMENT
        })
      }}>+</button>
      <button onClick={() => {
        store.dispatch({
          type: COUNTER_DECREMENT
        })
      }}>-</button>
    </div>
  );
};

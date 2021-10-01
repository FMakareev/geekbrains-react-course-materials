import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {store} from "./store";
import {COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_SET_COUNT} from "./store/counter/actionTypes";


const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.count;
  })


  return     <div>
    <h1>{count}</h1>

    <input type="number" value={count} onChange={(event) => {
      dispatch({
        type: COUNTER_SET_COUNT,
        payload: Number(event.target.value),
      })
    }}
    />
    <button onClick={() => {
      dispatch({
        type: COUNTER_INCREMENT
      })
    }}>+</button>
    <button onClick={() => {
      dispatch({
        type: COUNTER_DECREMENT
      })
    }}>
      -
    </button>
  </div>
}


export const ReduxExample = (props) => {
  return (
    <Provider store={store}>
      <CounterView/>
    </Provider>
  );
};

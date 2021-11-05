import { useState, useEffect, useRef } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { createStore } from "./store";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + 1
      };
    }
    case DECREMENT: {
      return {
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer, {
  count: 1
});

export const SimpleRedux = () => {
  const [, setState] = useState(false);
  const { count } = store.getState();
  const unsubscribe = useRef();

  const onUnsubscribe = () => {
    console.log(unsubscribe);
    unsubscribe.current();
  };
  const onSubscribe = () => {
    unsubscribe.current = store.subscribe(() => {
      setState((prev) => !prev);
    });
  };
  const onIncrement = () => {
    store.dispatch({ type: INCREMENT });
  };
  const onDecrement = () => {
    store.dispatch({ type: DECREMENT });
  };

  useEffect(() => {
    onSubscribe();
  }, []);

  return (
    <div>
      <h1>SimpleRedux</h1>
      <h3>{count}</h3>
      <ButtonGroup>
        <Button onClick={onUnsubscribe}>unsubscribe</Button>
        <Button onClick={onSubscribe}>subscribe</Button>
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>
      </ButtonGroup>
    </div>
  );
};

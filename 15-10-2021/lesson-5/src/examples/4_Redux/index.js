import { Provider, useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";
import { INCREMENT, DECREMENT } from "./store/counter/actions";
import { store } from "./store";

const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const name = useSelector((state) => state.name);

  const onIncrement = () => {
    dispatch({ type: INCREMENT });
  };
  const onDecrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <div>
      <h1>SimpleRedux</h1>
      <h3>{count}</h3>
      <h3>{name}</h3>
      <ButtonGroup>
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export const Redux = () => {
  return (
    <div>
      <h1>Redux</h1>
      <Provider store={store}>
        <CounterView />
      </Provider>
    </div>
  );
};

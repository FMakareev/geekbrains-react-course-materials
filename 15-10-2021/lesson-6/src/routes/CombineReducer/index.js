import {useState, useEffect, useRef} from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import {createStore} from "./store";
import {
  counterReducers,
  profileReducer,
  INCREMENT,
  DECREMENT,
  TOGGLE_SHOW_PROFILE
} from './reducers';


const combineReducers = (reducers) => {

  return (state = {}, action) => {
    const newState = {};

    for (const reducerName in reducers) {
      newState[reducerName] = reducers[reducerName](state[reducerName], action)
    }
    return newState;
  }
}



const store = createStore(
  combineReducers({
    count: counterReducers,
    profile: profileReducer,
  })
  , {
  count: {count: 0},
    profile: {
      isShow: false
    }
});

console.log(store.getState());

const ToggleShow = ({isShow, dispatch}) => {

  return (<input type="checkbox" checked={isShow} onChange={() => {
      dispatch({
        type: TOGGLE_SHOW_PROFILE
      })
    }}
  />)
}

const CountView = ({count}) => {
  return <h3>{count}</h3>
}

const CountControl = ({dispatch}) => {

  const onIncrement = () => {
    dispatch({type: INCREMENT});
  };
  const onDecrement = () => {
    dispatch({type: DECREMENT});
  };
  return <ButtonGroup>
    <Button onClick={onDecrement}>-</Button>
    <Button onClick={onIncrement}>+</Button>
  </ButtonGroup>
}


export const CombineReducer = () => {
  const [, setState] = useState(false);
  const {count, profile} = store.getState();
  const unsubscribe = useRef();
  const onSubscribe = () => {
    unsubscribe.current = store.subscribe(() => {
      setState((prev) => !prev);
    });
  };
  useEffect(() => {
    onSubscribe();
    return () => {
      unsubscribe.current();
    }
  }, []);

  return (
    <div>
      <h1>SimpleRedux</h1>
      <ToggleShow
        isShow={profile.isShow}
        dispatch={store.dispatch}
      />
      <CountView count={count.count}/>
      <CountControl dispatch={store.dispatch}/>
    </div>
  );
};

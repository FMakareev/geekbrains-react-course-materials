import React from 'react';
import {compose, hasCounter, hasLogger} from "./hocs";


const Message = ({message}) => {
  return <p>
    {message}
  </p>
}


const CounterView = ({counterState, increment, decrement}) => {
  return <h2>
    {counterState}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </h2>
}


console.log(compose());
console.log(compose(hasCounter));
console.log(compose(hasCounter, hasLogger));
const CounterViewWithHoc = compose(hasCounter, hasLogger)(CounterView);
// const CounterViewWithHoc = hasCounter(hasLogger(CounterView));

const MessageWithHoc = hasLogger(Message)


export const HOCs = (props) => {
  return (
    <div>
      <CounterViewWithHoc test="asda"/>
      {/*<MessageWithHoc message={"test"}/>*/}
    </div>
  );
};

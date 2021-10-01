import React, {createContext, useState, useContext, useCallback, useRef} from 'react';


const CounterContext = createContext({
  value: 0,
})


const CounterView = () => {
  const {value} = useContext(CounterContext);
  return <h2>
    {value}
  </h2>
}

const CounterControl = () => {
  const {increment, decrement} = useContext(CounterContext);

  return (<div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>)
}

const CounterLayout = () => {
  const renderCount = useRef(0);

  renderCount.current += 1;
  return <div>
    {
      renderCount.current
    }
    <CounterView />
    <CounterControl/>
  </div>
}

export const ContextExample = () => {
  const [counterState, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((counter) => counter + 1)
  }, [])

  const decrement = useCallback(() => {
    setCounter((counter) => counter - 1)
  }, [])


  return (
    <CounterContext.Provider value={{
      value: counterState,
      increment,
      decrement
    }}>
      <CounterLayout/>
    </CounterContext.Provider>
  );
};

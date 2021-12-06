import {useCallback, useState} from "react";


const CounterContainer = ({count, decrement, increment}) => {

  return (<div>
    count: {count}
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>)
}

const Example = (props) => {
  return <div style={props.style}>
    {props.name}
  </div>
}


const hasLogger = (Component) => {
  return (props) => {
    console.log('[LOGGER]: ',props)
    return <Component {...props}/>
  }
}


const hasProps = (injectedProps) => (Component) => {
  return (props) => {
    return <Component {...props} {...injectedProps} />
  }
}

const hasCounter = (Component) => {
  const Counter = (props) => {
    const [count, setCount] = useState(12);

    const increment = useCallback(() => {
      setCount(prev => prev + 1)
    }, [])
    const decrement = useCallback(() => {
      setCount(prev => prev - 1)
    }, [])

    return <Component
      {...props}
      count={count}
      increment={increment}
      decrement={decrement}
    />
  }
  Counter.displayName = 'hasCounter';

  return Counter
}

const ExampleWithLogger = hasLogger(Example)
const ExampleWithStyle = hasProps({
  style: {
    color: 'red'
  }
})(Example)

const CounterContainerWithHoc = hasCounter(hasLogger(CounterContainer));

export const HOCs = () => {

  return <div>
    <h1>HOCs</h1>
    <CounterContainer/>
    <CounterContainerWithHoc/>

    <Example name={'hello default'}/>
    <ExampleWithLogger name={'hello with logger'}/>
    <ExampleWithStyle name={'hello with style'}/>
  </div>
}

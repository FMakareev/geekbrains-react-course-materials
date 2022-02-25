import {useCallback, useState} from "react";

const CounterView = ({count}) => {

  return <div>
    {count}
  </div>
}

const CounterControl = ({increment, decrement}) => {

  return <div>
    <button onClick={decrement}>decrement</button>
    <button onClick={increment}>increment</button>
  </div>
}


const Counter = ({children, renderView}) => {
  const [count, SetCount] = useState(0);
  const increment = useCallback(() => {
    SetCount((count) => count + 1)
  },[])
  const decrement = useCallback(() => {
    SetCount((count) => count - 1)
  },[])

  if(typeof renderView === 'function') {
    return renderView({count, increment, decrement})
  }

  if(typeof children === 'function'){
    return children({count, increment, decrement})
  }

  return null
}



export const ChildrenAndRenderProps = () => {


  return <div>
    <h1>
      ChildrenAndRenderProps
    </h1>

    <Counter
      renderView={({count, increment, decrement}) => {
        return <div>
          <CounterView count={count}/>
          <CounterControl increment={increment} decrement={decrement}/>
        </div>
      }}
    />
    <Counter>
      {
        ({count, increment, decrement}) => {
          return <div>
            <CounterView count={count}/>
            <CounterControl increment={increment} decrement={decrement}/>
          </div>
        }
      }
    </Counter>
  </div>
}

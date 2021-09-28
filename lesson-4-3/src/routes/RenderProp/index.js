import React, {useCallback, useState, cloneElement} from 'react';


const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount((count) => count - 1)
  }, [])

  return [
    count,
    {
      increment,
      decrement,
    }
  ]
}


const WrapperCounter = ({renderView, children}) => {
  const [count, {increment, decrement}] = useCounter();

  if (typeof (renderView) === 'function') {
    return renderView({
      increment,
      decrement,
      count
    })
  }

  if(typeof (children) ==='function') {
    return children(increment, decrement, count)
  }

  return null;
}

const CounterView = ({
                       increment,
                       decrement,
                       count
                     }) => {

  return <div>
    <button onClick={decrement}>-</button>
    {count}
    <button onClick={increment}>+</button>
  </div>
}


const Parent = ({children}) => {
  return <div>
    <h3>parent</h3>
    original -> {children}
    <br/>
    copy -> {
      cloneElement(children, {
        className: 'test',
      })
    }
    <br/>
    copy -> {
      cloneElement(children, {
        className: [children.props.className, 'test'].join(' '),
      })
    }
  </div>
}

const Child = ({className}) => {
  return <div>
    className: {className}
  </div>
}

export const RenderProp = (props) => {
  return (
    <div>
      <Parent>
        <Child className={'childClassName'}/>
      </Parent>
      <br/>
      <WrapperCounter renderView={CounterView}/>
      <br/>
      <WrapperCounter>
        {
          (increment, decrement, count) => {
            return <CounterView
              increment={increment}
              decrement={decrement}
              count={count}
            />
          }
        }
      </WrapperCounter>
    </div>
  );
};

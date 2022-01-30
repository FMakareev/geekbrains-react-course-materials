import { createContext, useState, useCallback, useContext } from 'react';

const CounterContext = createContext({
    count: 0,
    decrement: () => {},
    increment: () => {},
})

export const CounterView = () => {
    const {count} = useContext(CounterContext);
    return <div>
        count: {count}
    </div>
}

export const CounterControl = () => {
    const {decrement, increment} = useContext(CounterContext);
    return <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
}

export const CounterContainer = () => {
    return <div>
        <CounterView/>
        <CounterControl/>
    </div>
}

export const ContextExample = () => {
    const [ count, setCount ] = useState(0);

    const increment = useCallback(() => {
        setCount((count) => {
            return count + 1
        })
    }, [])

    const decrement = useCallback(() => {
        setCount((count) => {
            return count - 1
        })
    }, [])

    const config = {
        count,
        decrement,
        increment
    }

    return <CounterContext.Provider value={config}>
        <CounterContainer/>
    </CounterContext.Provider>
}

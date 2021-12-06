import { createContext, useState, useCallback, useContext } from 'react';

export const CounterContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},
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
    const [count, setCount] = useState(12);

    const increment = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
    const decrement = useCallback(() => {
        setCount(prev => prev - 1)
    }, [])


    return <CounterContext.Provider
        value={{
            count,
            increment,
            decrement
        }}
    >
        <CounterContainer/>
    </CounterContext.Provider>
}

import { useState, useCallback, createContext, useContext } from 'react';


const CounterContext = createContext({
    count: 0,
    increment: () => {}, 
    decrement: () => {}, 
})

const CounterControl = () => {
    const {decrement, increment} = useContext(CounterContext);
    return <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
}

const CounterView = ()=> {
    const {count} = useContext(CounterContext);
    return <b>
        {count}
    </b>
}

const CounterContainer = () => {
    return <div>
        <CounterView/>
        <CounterControl/>
    </div>
}


export const ContextExample = () => {
    const [count, setCount] = useState(0);


    const increment = useCallback(() => {
        setCount((count) => {
            return count + 1;
        })
    }, []);

    const decrement = useCallback(() => {
        setCount((count) => {
            return count - 1;
        })
    }, []);

    return (<div>
        <CounterContext.Provider value={{count, decrement, increment}}>
            <CounterContainer />
        </CounterContext.Provider>
    </div>)
}
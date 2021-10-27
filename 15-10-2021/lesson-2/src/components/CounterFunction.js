import React, { useState } from "react";

export const CounterFunction = () => {
    const [state, setState] = useState(10);

    const decrement = () => {
        setState(state - 1);
    };

    return (
        <div>
            <h2>CounterFunction</h2>
            <h4>count: {state} </h4>
            <button onClick={decrement}>decrement</button>
            <button>increment</button>
        </div>
    );
};

import React, { useState, useMemo, useEffect, useCallback } from 'react';

export const CounterFunction = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 2 === 1) {
      console.log('new count = ', count)
    }
  }, [count])

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  useEffect(() => {
    console.log('componentDidMount')
  }, [])

  useEffect(() => {
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])


  const date = useMemo(() => {
    return new Date().toISOString();
  }, [

  ]);

  const increment = useCallback(() => {
    setCount( (count) => count + 1);
  }, [])

  return <div>
    <div>
      date: {date}
    </div>
    <div>
      CounterFunction counter: { count }
    </div>
    <button onClick={increment}>
      increment
    </button>
  </div>
}
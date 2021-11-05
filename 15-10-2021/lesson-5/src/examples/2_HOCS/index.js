import { useState, useCallback } from "react";
const Example = ({ count, decrement, increment }) => {
  return (
    <div>
      Example: {count}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

const withLoggerHOC = (Component) => {
  return (props) => {
    console.log("[LOGGER]: ", props);
    return <Component {...props} />;
  };
};

const withCounterHOC = (Component) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);
    const decrement = useCallback(() => {
      setCount((prev) => prev - 1);
    }, []);

    return (
      <Component
        {...props}
        count={count}
        decrement={decrement}
        increment={increment}
      />
    );
  };
};

const withPropsInjectHOC = (Component, injectProps = {}) => {
  return (props) => {
    return <Component {...props} {...injectProps} />;
  };
};

// const ExampleWithHOC = withLoggerHOC(Example);
// const ExampleWithHOC = withCounterHOC(withLoggerHOC(Example));
const ExampleWithHOC = withPropsInjectHOC(
  withCounterHOC(withLoggerHOC(Example)),
  {
    hello: "REACT"
  }
);
// const ExampleWithHOC = (props) => {
//   console.log("[LOGGER]: ", props);
//   return <Example {...props} />;
// };

export const HOCS = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>HOCS</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        change
      </button>
      <ExampleWithHOC count={count} />
    </div>
  );
};

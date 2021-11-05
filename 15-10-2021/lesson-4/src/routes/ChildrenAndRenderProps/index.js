import { useState } from "react";

const Header = (props) => {
  return (
    <header>
      <div>Logo</div>
      <div>{props.renderLeft()}</div>
      <div>{props.renderRight()}</div>
    </header>
  );
};

const ComponentFunction = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);

  if (typeof props.children !== "function") {
    return null;
  }

  return <div>{props.children({ count, setCount })}</div>;
};

const Component = (props) => {
  console.log(props);
  return <div>{props.children}</div>;
};

export const ChildrenAndRenderProps = () => {
  return (
    <div>
      <h1>ChildrenAndRenderProps</h1>
      <Component>say hello</Component>
      <Component>
        <Component>say hello 2</Component>
        <Component>say hello 2</Component>
        <Component>say hello 2</Component>
        <Component>say hello 2</Component>
      </Component>

      <br />
      <br />

      <Header
        renderLeft={() => <div>left</div>}
        renderRight={() => <div>right</div>}
      />

      <br />
      <br />
      <ComponentFunction>
        {({ count, setCount }) => {
          return (
            <div>
              {count}
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
          );
        }}
      </ComponentFunction>
    </div>
  );
};

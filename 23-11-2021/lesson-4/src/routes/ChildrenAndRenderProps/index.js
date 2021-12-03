import {useState} from "react";


const Counter = ({children, render}) => {
  const [count, setCount] = useState(0);

  if (typeof render === 'function') {
    return render(count, setCount);
  }

  if (typeof children ==='function') {
    return children(count, setCount)
  }

  console.info('render and children is not defined');

  return null;
}

const Header = ({children}) => {
  const [isAuth, setAuth] = useState(false);

  return (<header>
    <h1>Logo</h1>
    <nav>
      <ul>
        <li>home</li>
        <li>info</li>
        <li>products</li>
      </ul>
    </nav>

    <div>
      {typeof children === 'function' && children({isAuth, setAuth})}
      {typeof children !== 'function' && children}
    </div>
  </header>)
}


export const ChildrenAndRenderProps = () => {
  return (
    <div>
      <h1>ChildrenAndRenderProps</h1>

      <Counter
        render={(count, setCount) => {
          return <div>
            count: {count}
            <button onClick={() => setCount(count + 1)}>inc</button>
          </div>
        }}
      />

      <Counter>
        {
          (count, setCount) => {

            return <div>
              count: {count}
              <button onClick={() => setCount(count + 1)}>inc</button>
            </div>
          }
        }
      </Counter>

      <Header>
        {
          ({setAuth, isAuth}) => {
            if (isAuth) {
              return (<nav>
                <ul>
                  <li>profile</li>
                  <li onClick={() => setAuth(false)}>logout</li>
                </ul>
              </nav>)
            }

            return (<nav>
              <ul>
                <li onClick={() => setAuth(true)}>login</li>
                <li>registration</li>
              </ul>
            </nav>)
          }
        }
      </Header>
      <Header>
        <nav>
          <ul>
            <li>login</li>
            <li>registration</li>
          </ul>
        </nav>
      </Header>
    </div>
  );
};

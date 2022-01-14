import {LoginForm} from "./examples/hooks";
import {useState, useMemo, useEffect} from "react";
import {useCounter} from "./hooks/useCounter";


function App() {
  const {count, increment, decrement} = useCounter();
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    if (search === '') {
      return users;
    }
    return users.filter((item) => item.login.indexOf(search) !== -1);
  }, [search, users])

  useEffect(() => {
    // хук выполняет установку таймера при первом рендере
    console.log('did mount');
    setTimeout(() => {
      console.log('setTimeout');
    },  1000);
  },[]);

  useEffect(() => {
    /**
     * хук наблюдает за изменениями в search и после каждого изменения
     * сбрасывает таймер и запускает по новой
     * */
    console.log('did update');
    const clearId = setInterval(() => {
      console.log('setTimeout', search);
    },  1000);
    return () => {
      console.log('clear did update');
      clearInterval(clearId);
    }
  }, [search])

  useEffect(() => {
    // хук наблюдает за изменениями в search
    console.log('subscribe: ', search);
  }, [search])

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <div className="App">
      <button onClick={decrement}>decrement</button>
      {count}
      <button onClick={increment}>increment</button>
      <br/>
      <br/>
      <br/>
      <input
        value={search}
        type="search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <br/>
      <br/>
      <br/>
      <LoginForm
        handleSubmit={(formState) => {
          setUser([...users, formState])
        }}
      />
      <ul>
        {
          filteredUsers.map((item) => <li>
            <div>{item.login}</div>
            <div>{item.password}</div>
          </li>)
        }
      </ul>

    </div>
  );
}

export default App;

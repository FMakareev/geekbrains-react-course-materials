import {useEffect, useMemo, useState} from 'react';
import {useUsers} from "./hooks/useUsers";


const UserList = (props) => {
  const [users, {addUser, removeUser}] = useUsers();

  useEffect(() => {
    console.log('update users', users);

    props.onChange(users);

  }, [users])

  useEffect(() => {
    if (users.length === 0) {
      return;
    }

    const timerId = setTimeout(() => {
      console.log('removed -> ', users[0].name)
      removeUser(users[0].name)()
    }, 2000);

    return () => {
      clearTimeout(timerId);
    }
  }, [users])


  useEffect(() => {

    const callback = () => {
      console.log('scroll', users)
    }
    window.addEventListener('scroll', callback);

    return () => {
      window.removeEventListener('scroll', callback);
    }
  }, [users])


  return <div>
    <button onClick={addUser}>
      add
    </button>
    <div>
      {
        users.map((item) => <div>{item.name}
          <button onClick={removeUser(item.name)}>-</button>
        </div>)
      }
    </div>
  </div>
}


const NumberList = () => {
  const [numbers, setNumber] = useState([])
  const [value, setValue] = useState(0);

  const sum = useMemo(() => numbers.reduce((acc, number) => acc + number, 0), [numbers])

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const copyNumbers = [...numbers];
    copyNumbers.push(parseInt(value));
    setNumber(copyNumbers);
    setValue(0);
  }

  return <form onSubmit={onSubmit} action="">
    <h1>
      sum: {sum}
    </h1>
    <input type="number" onChange={onChange} value={value} />
    <button type="submit">save</button>
  </form>

}

function App(props) {
  const [state, setState] = useState([])

  useEffect(() => {
    console.log('update');
  })

  useEffect(() => {
    console.log('mount');
  }, [])

  useEffect(() => {
    console.log('update state', state);
  }, [state])

  return (
    <div className="App">
      <NumberList/>
      <UserList
        onChange={(users) => {
          console.log('onChange', users);
          setState(users);
        }}
      />
    </div>
  );
}

export default App;

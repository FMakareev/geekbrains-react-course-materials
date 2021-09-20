import {useState} from 'react';
import faker from 'faker';
import {CounterClass} from "./exaples/CounterClass";
import {FormExample} from "./exaples/FormExample";
import {CounterFunction} from "./exaples/CounterFunction";
import {ListData} from "./exaples/ListData";


const list = Array.from({
  length: 10
}).map(() => faker.name.findName())



export const useToggle = (initToggle) => {
  const [toggle, setToggle] = useState(initToggle || false);

  const onToggle = () => setToggle(!toggle);

  return [
    toggle,
    {
      setToggle,
      onToggle
    }
  ]
}

function App() {
  const [show, {onToggle}] = useToggle();

  return (
    <div className="App">

      <ListData list={list}/>

      <button onClick={onToggle}>setShow</button>
      {
        show &&
        <CounterClass/>
      }
      {
        show &&
        <CounterFunction/>
      }
      <FormExample/>
    </div>
  );
}

export default App;

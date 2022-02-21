import { useState } from 'react';
import {RefExample} from "./examples/RefExample";

function App() {
  const [list, setList] = useState([]);


  return (
    <>
      <button onClick={() => {
        setList([
          ...list,
          `iten-${list.length + 1}`
        ])
      }}>new</button>
      <RefExample list={list}/>
    </>
  );
}

export default App;

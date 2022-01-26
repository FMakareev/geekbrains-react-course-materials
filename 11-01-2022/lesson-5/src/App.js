import logo from './logo.svg';
import './App.css';
import {ContextExample} from "./examples/context";
import {HOCs} from "./examples/HOCs";
import {SimpleRedux} from "./examples/simpleRedux";
import {ReduxExample} from "./examples/reduxExample";

function App() {
  return (
    <div className="App">
      {/*<ContextExample/>*/}
      {/*<HOCs/>*/}
      {/*<SimpleRedux/>*/}
      <ReduxExample/>
    </div>
  );
}

export default App;

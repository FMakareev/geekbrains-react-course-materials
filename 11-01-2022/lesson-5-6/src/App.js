import {ReduxExample} from "./examples/reduxExample";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*<ContextExample/>*/}
      {/*<HOCs/>*/}
      {/*<SimpleRedux/>*/}
      <BrowserRouter>
        <ReduxExample/>
      </BrowserRouter>
    </div>
  );
}

export default App;

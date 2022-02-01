import { BrowserRouter } from 'react-router-dom';
import { Todo} from "./pages/todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Todo/>
      </BrowserRouter>
    </div>
  );
}

export default App;

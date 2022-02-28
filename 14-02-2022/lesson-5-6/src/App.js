import { Provider } from 'react-redux'

import {Todos} from './pages/Todos';
import {HOCs} from './pages/HOCs';
import {ContextExample} from './pages/Context';
import {store} from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todos />
      </Provider>
    </div>
  );
}

export default App;

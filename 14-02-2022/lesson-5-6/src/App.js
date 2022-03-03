import { Provider } from 'react-redux'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Todos} from './pages/Todos';
import {store} from './store';
import {ProjectsPage} from "./pages/Projects";
import {TodosConnect} from "./pages/TodosConnect";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Link to={"/projects"}>
              projects
            </Link>
            <br/>
            <Switch>
              <Route path={'/projects'}>
                <ProjectsPage>
                  <Route path={'/projects/:projectId'}>
                    <TodosConnect />
                  </Route>
                </ProjectsPage>
              </Route>
            </Switch>
          </>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

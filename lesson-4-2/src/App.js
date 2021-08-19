import {Header} from "./components/Header";
import {Switch, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Posts} from "./pages/Posts";
import {RenderProp} from "./pages/RenderProp";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/posts">
          <Posts/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/render-prop">
          <RenderProp/>
        </Route>
      </Switch>
      <br/>
      {/*<Switch>*/}
      {/*  {*/}
      {/*    routes.map(({path, component, exact}, index) => (<Route key={index} component={component} exact={exact} path={path}/>))*/}
      {/*  }*/}
      {/*</Switch>*/}
    </div>
  );
}

export default App;

import {Switch, Route} from 'react-router-dom'
import {Comments} from "./pages/Comments";
import {Home} from "./pages/Home";
import {Post} from "./pages/Post";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/post/:postId" component={Post}/>
        <Route path="/comments/:postId" component={Comments}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

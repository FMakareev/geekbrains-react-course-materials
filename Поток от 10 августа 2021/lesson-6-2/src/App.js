import {Switch, Route} from 'react-router-dom'
import {CardPage} from "./pages/CardPage";
import {Layout} from "./components/Layout";
import {CollectionsPage} from "./pages/CollectionsPage";
import {Header} from "./components/Header";

function App() {
  return (
    <Layout>
      <Header/>
      <br/>
      <br/>
      <Switch>
        <Route path='/cards/:collectionId' component={CardPage}/>
        <Route exact path='/' component={CollectionsPage}/>
      </Switch>
    </Layout>
  );
}

export default App;

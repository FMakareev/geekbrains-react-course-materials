import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import {Routes} from "./routes/Routes";
import {createPosts} from "./routes/Posts/mock";
import {BrowserRouter} from 'react-router-dom';

/**
 * /
 * /posts
 * /posts/:postId
 *    /posts/:postId/comments
 * /profile
 *    /profile/albums
 *    /profile/settings
 *    /profile/favorites
 * /render-props
 * /not-found
 * */

console.log(createPosts(4));

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Layout>
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;

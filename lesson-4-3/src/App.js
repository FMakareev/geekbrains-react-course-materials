import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import {Routes} from "./routes/Routes";
import {RenderProp} from "./routes/RenderProp";
import {createPosts} from "./routes/Posts/mock";

/**
 * /
 * /posts
 *    /posts/:id
 *    /posts/:id/comments
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
    <div className="App">
      <Header/>
      <Layout>
        <Routes />
        <RenderProp />
      </Layout>
    </div>
  );
}

export default App;

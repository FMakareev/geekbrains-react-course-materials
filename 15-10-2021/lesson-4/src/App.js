import { Switch, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home, Profile, Posts } from "./routes";
import { Post } from "./routes/Posts/routes";

export default function App() {
  return (
    <Layout>
      <Route path="/posts/:postId">
        <Post />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

      <Switch></Switch>
    </Layout>
  );
}

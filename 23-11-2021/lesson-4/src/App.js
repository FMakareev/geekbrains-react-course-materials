import { Switch, Route } from "react-router-dom";
import { Layout } from "./components";
import {ChildrenAndRenderProps, Home, Posts, Profile} from "./routes";
import {Post} from "./routes/Post";


export default function App() {
  return (
    <Layout>
      // todo router

      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={ChildrenAndRenderProps} path="/ChildrenAndRenderProps" />
        <Route component={Post} path="/posts/:postId" />
        <Route component={Posts} path="/posts" />
        <Route path={["/user", "/profile"]} >
          {
            (props) => {
              console.log(props);
              return <Profile parent={props.match.path}/>
            }
          }
        </Route>
      </Switch>
    </Layout>
  );
}

import { Switch, Route } from "react-router-dom";
import { Layout } from "./components";
import {ChildrenAndRenderProps, Home, Posts, Profile} from "./routes";
import {Post} from "./routes/Post";
import {Comments} from "./routes/Comments";
import React from "react";
import {getHomeLink, getPostCommentsLink, navigation} from "./navigation";

export default function App() {
  return (
    <Layout>
      <Switch>
        {/*<Route exact path={'/'} component={Home}/>*/}
        {/*<Route exact path={navigation.home} component={Home}/>*/}
        <Route exact path={getHomeLink()} component={Home}/>

        {/*<Route path={'/profile'} component={Profile}/>*/}
        <Route path={navigation.profile} component={Profile}/>

        {/*<Route path={'/posts/:postId'}>*/}
        {/*  <Post>*/}
        {/*    <Route path="/posts/:postId/comments" component={Comments} />*/}
        {/*  </Post>*/}
        {/*</Route>*/}
        <Route path={navigation.post}>
          <Post>
            <Route path={getPostCommentsLink()} component={Comments} />
            {/*<Route path={navigation.postComments} component={Comments} />*/}
          </Post>
        </Route>

        {/*<Route path={'/posts'} component={Posts}/>*/}
        <Route path={navigation.posts} component={Posts}/>
      </Switch>
    </Layout>
  );
}

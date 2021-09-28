import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from "./Home";
import {Posts} from "./Posts";
import {Post} from "./Posts/routes/Post";
import {Profile} from "./Profile";
import {NotFound} from "./NotFound";
import {RenderProp} from "./RenderProp";
import {getHomePath, getPostCommentsByIdPath, getPostsByIdPath, getPostsPath} from "../navigation";

console.log('getPostsPath: ',getPostsPath());
console.log('getPostsByIdPath: ',getPostsByIdPath());
console.log('getPostsByIdPath: ',getPostsByIdPath(123));
console.log('getPostCommentsByIdPath: ',getPostCommentsByIdPath());
console.log('getPostCommentsByIdPath: ',getPostCommentsByIdPath(123));


/**
 *
 * /chats
 *    /chats/:chatId
 *
 * */

export const Routes = (props) => {

  return (
    <Switch>
      {/* "/" === "/"*/}
      <Route exact path="/" component={Home} />
      <Route exact path={getPostsPath()} component={Posts} />
      <Route path={getPostsByIdPath()} component={Post} />
      <Route path="/profile" component={Profile} />
      <Route path="/render-prop" component={RenderProp} />

      <Route path="*" component={NotFound}/>
    </Switch>
  );
};

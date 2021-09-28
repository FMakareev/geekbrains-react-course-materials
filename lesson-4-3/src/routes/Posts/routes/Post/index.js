import React from 'react';
import {useParams, Redirect, Route, Link, Switch} from "react-router-dom";
import {MOCK_POSTS} from "../../mock";
import {Comments} from "./routes/Comments";
import {getPostComments404Path, getPostCommentsByIdPath} from "../../../../navigation";
import {NotFound} from "../../../NotFound";


export const Post = (props) => {
  const {postId} = useParams();

  const post = MOCK_POSTS.find(({id}) => id === postId);

  if (!post) {
    return  <Redirect to="/404"/>
  }

  return (
    <div>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.content}
      </p>

      <Link to={getPostCommentsByIdPath(postId)} >
        open comments
      </Link>
      <br/>
      <Switch>
        <Route path={getPostCommentsByIdPath()} component={Comments}/>
        <Route path={getPostComments404Path()} component={NotFound}/>
      </Switch>
    </div>
  );
};

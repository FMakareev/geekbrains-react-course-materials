import React from "react";
import { useParams, Redirect, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MOCK_POSTS } from "../../helpers/mock";
import { Comments } from "./routes/Comments";
import { NotFound } from "../../../index";

export const Post = (props) => {
  const { postId } = useParams();
  const post = MOCK_POSTS.find((item) => item.id === postId);

  if (!post) {
    return <Redirect to="/posts" />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <Link to={`/posts/${postId}/comments`}>Open comments</Link>

      <Switch>
        <Route path="/posts/:postId/comments" component={Comments} />
      </Switch>
    </div>
  );
};

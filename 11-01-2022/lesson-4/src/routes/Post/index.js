import React from "react";
import { useParams, Redirect, Switch, Route, Link } from "react-router-dom";
import { MOCK_POSTS } from "../../helpers/mock";
import { Comments } from "../Comments";
import {getPostCommentsLink, navigation} from "../../navigation";

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

      <Link to={navigation.postComments.replace(':postId', postId)}>
        Open comments ({post.commentsCount})
      </Link>
      <Link to={getPostCommentsLink(postId)}>Open comments ({post.commentsCount})</Link>
      {/*<Link to={`/posts/${postId}/comments`}>Open comments ({post.commentsCount})</Link>*/}

      {props.children}
    </div>
  );
};

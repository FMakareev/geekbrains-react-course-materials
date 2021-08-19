import React from 'react';
import {useParams, Redirect} from "react-router-dom";



export const Post = ({posts}) => {
  const {postId} = useParams();

  const currentPost = posts?.find(({id}) => id === postId);

  if (!currentPost) {
    return <Redirect to="/posts"/>
  }

  return (
    <div>
      <h1>
        {currentPost.title}
      </h1>
      <h2>
        {currentPost.description}
      </h2>
      <p>
        {currentPost.content}
      </p>
    </div>
  );
};
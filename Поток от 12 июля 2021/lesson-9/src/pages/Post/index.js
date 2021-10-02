import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getPostById} from "../../store/post/selectors";


export const Post = () => {
  const  {postId} = useParams();
  const post = useSelector(getPostById(postId));

  return (
    <div>
      <h1># {post.title}</h1>
      <p>
        {post.content}
      </p>
    </div>
  );
};
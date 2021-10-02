import React from 'react';
import {MOCK_POSTS} from "../../../../mock";
import {useParams, Redirect} from "react-router-dom";
import {getPostComments404Path} from "../../../../../../navigation";



export const Comments = (props) => {
  const {postId} = useParams();

  const post = MOCK_POSTS.find(({id}) => id === postId);

  if (!post.comments) {
    return <Redirect to={getPostComments404Path(postId)}/>
  }

  return (
    <ul>
      {
        post.comments.map(({comment, id}) => (<li key={id}>
          {comment}
        </li>))
      }
    </ul>
  );
};

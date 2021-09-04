import React from 'react';


export const CommentItem = ({postId, id, name, email, body}) => {
  return (
    <div>
      <h6>postId:{postId}</h6>
      <h4>{name}</h4>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
};
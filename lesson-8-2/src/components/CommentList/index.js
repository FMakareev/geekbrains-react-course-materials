import React from 'react';
import {CommentItem} from "../CommentItem";



export const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment) => <CommentItem key={comment.id} {...comment}/>)}
    </div>
  );
};
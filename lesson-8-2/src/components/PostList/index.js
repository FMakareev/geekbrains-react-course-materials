import React from 'react';
import {PostItem} from "../PostItem";


export const PostList = ({posts}) => {
  return (
    <div>
      {posts?.map((post) => <PostItem key={post.id} {...post}/>)}
    </div>
  );
};
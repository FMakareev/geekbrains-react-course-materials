import React from 'react';
import {Grid} from '@material-ui/core';

import {arrayOf} from 'prop-types';
import {FeaturedPost, PostPropTypes} from '../FeaturedPost';


export const FeaturedPostList = (props) => {
  return (
    <Grid container spacing={4}>
      {
        props.posts.map((post) => <Grid key={post.id} item xs={12} md={6}>
          <FeaturedPost post={post}/>
        </Grid>)
      }
    </Grid>
  );
};


FeaturedPostList.propTypes = {
  posts: arrayOf(PostPropTypes),
}
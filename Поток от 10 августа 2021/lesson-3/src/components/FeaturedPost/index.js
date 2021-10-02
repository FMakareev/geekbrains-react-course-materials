import React from 'react';
import {shape, string} from 'prop-types';
import {CardActionArea, Card, CardContent, Typography, CardMedia} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetail: {
    flex: 1,
  },
  cardMedia: {
    width: 100
  }
});


export const FeaturedPost = ({post}) => {
  const classes = useStyles({post});

  return (
    <CardActionArea component='a' href='#'>
      <Card className={classes.card}>
        <div className={classes.cardDetail}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {
                post.title
              }
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {
                post.date
              }
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {
                post.description
              }
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle}/>
      </Card>
    </CardActionArea>
  );
};


export const PostPropTypes = shape({
  id: string.isRequired,
  title: string.isRequired,
  date: string.isRequired,
  description: string,
  image: string,
  imageTitle: string,
})


FeaturedPost.propTypes = {
  post: PostPropTypes.isRequired,
}
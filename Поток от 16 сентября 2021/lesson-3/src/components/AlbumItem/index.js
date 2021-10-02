import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';

export const AlbumItem = ({
                            title,
                            description,
                            image,
                          }) => {
  return (
    <Card sx={{
      padding: '16px'
    }}>
      <CardMedia
        component="img"
        height="140"
        image={image?.src}
        alt={image?.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export const AlbumItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })
}


AlbumItem.propTypes = AlbumItemPropTypes

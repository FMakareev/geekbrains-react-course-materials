import React from 'react';
import Card from '@material-ui/core/Card';
import {Typography, CardContent, makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
  title: {
    fontSize: 14,
  }
});

export const QuestionCard = ({
                               question,
                               category
                             }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {category}
        </Typography>
        <Typography variant="h5" component="h2">
          {question}
        </Typography>
      </CardContent>
    </Card>
  );
};
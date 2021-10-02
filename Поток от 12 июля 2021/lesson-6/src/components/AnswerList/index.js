import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export const AnswerList = ({
                             isShowAnswer,
                             correctAnswer,
                             chooseAnswer,
                             allAnswers,
                           }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        Array.isArray(allAnswers) && allAnswers.map(
          (text) => <Button
            variant="contained"
          >
            {text}
          </Button>
        )
      }
    </div>
  );
};
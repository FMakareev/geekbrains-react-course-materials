import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import {useSimpleForm} from "../../hooks/useSimpleForm";
import {cardsConnect} from "../../connects/cards";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const CreateCardFormRender = ({collectionId, addCards}) => {
  const classes = useStyles();
  const {setFieldValue, getFieldValue, resetForm} = useSimpleForm({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const card = {
      collectionId,
      id: Date.now().toString(),
      content: getFieldValue('content')
    }

    addCards(card);

    resetForm();
  }
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField
        name='content'
        value={getFieldValue('content')}
        onChange={(event) => {
          setFieldValue('content', event.target.value);
        }}
        label="Content" />
      <Button type="submit">Save</Button>
    </form>
  );
};

CreateCardFormRender.propTypes  = {
  collectionId: propTypes.string.isRequired,
}

export const CreateCardForm = cardsConnect(CreateCardFormRender);
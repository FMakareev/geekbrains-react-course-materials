import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import {CircularProgress} from "@material-ui/core";
import {WithFeedbackForm} from "../../hoc/WithFeedbackForm";


export const FeedbackRender = ({handleSubmit, setFieldValue, getFieldValue, isLoading}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          onChange={(event) => {
            setFieldValue('name', event.target.value)
          }}
          value={getFieldValue('name')}
          label="Как к вам обращаться?"
          variant="outlined"
        />
        <TextField
          onChange={(event) => {
            setFieldValue('phone', event.target.value)
          }}
          value={getFieldValue('phone')}
          label="Телефон"
          variant="outlined"
        />

        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Продолжить
          </Button>
          {isLoading && <CircularProgress size={24} />}
        </div>
      </div>
    </form>
  );
};

export const Feedback = WithFeedbackForm(FeedbackRender, {
  type: 'apartment'
});
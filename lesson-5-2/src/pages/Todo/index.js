import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';

import DeleteIcon from '@material-ui/icons/Delete';
import {useSimpleForm} from "../../hooks/useSimpleForm";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createActionChangeTodo, createActionCreateTodo, createActionRemoveTodo} from "../../store/todo/actions";


export const Todo = (props) => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const {setFieldValue, getFieldValue, values, resetForm} = useSimpleForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createActionCreateTodo({
      ...values,
      status: false,
      id: Date.now(),
    }))
    resetForm();
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            onChange={(event) => {
              setFieldValue('text', event.target.value)
            }}
            value={getFieldValue('text')}
            variant="outlined"
          />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              save
            </Button>
          </div>
        </div>
      </form>

      <List>
        {
          todoList.map(({text, status, id}) => <ListItem key={id}>
            <ListItemSecondaryAction>
              <IconButton>
                <Checkbox
                  checked={status}
                  onChange={() => {
                    dispatch(createActionChangeTodo(id, !status))
                  }}
                  inputProps={{'aria-label': 'primary checkbox'}}
                />
              </IconButton>
            </ListItemSecondaryAction>
            <ListItemText
              primary={text}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => {
                dispatch(createActionRemoveTodo(id))
              }} edge="end" aria-label="delete">
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>)
        }

      </List>
    </div>
  );
};
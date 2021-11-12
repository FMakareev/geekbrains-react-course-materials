import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button, Stack} from "react-bootstrap";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { List } from "../../components/List";
import {getError, getLoading, getTodos} from "../../store/todos/selector";
import {getTodosWithThunk} from "../../store/todos/action";
import {newTodos} from "../../store/newTodos";

export const StudentExercises2 = () => {

  const dispatch = useDispatch();
  const isError = useSelector(newTodos.selectors.getError)
  const isLoading = useSelector(newTodos.selectors.getLoading)
  const todos = useSelector(newTodos.selectors.getData)

  const getData = () => {
    dispatch(newTodos.actions.getDataWithThunk);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <Stack gap={3}>
      <h1>Middleware</h1>

      <Button onClick={getData}>Recall effect</Button>

      {
        isLoading &&
        <Loader />
      }

      {
        isError &&
        <Error reload={getData} />
      }
      {
        !isLoading && todos.length > 0 &&
        <List list={todos} />
      }
    </Stack>
  );
};

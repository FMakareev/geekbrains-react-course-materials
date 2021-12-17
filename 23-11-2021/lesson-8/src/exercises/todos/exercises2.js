import React, {useEffect} from "react";
import {Button, Stack} from "react-bootstrap";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { List } from "../../components/List";
import {useDispatch, useSelector} from "react-redux";
import {getLoading, getError, getTodos} from "../../store/todos/selector";
import {getTodosThunk} from "../../store/todos/action";


export const StudentExercises2 = () => {

  const isLoading = useSelector(getLoading)
  const isError = useSelector(getError)
  const todos = useSelector(getTodos)

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getTodosThunk);
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

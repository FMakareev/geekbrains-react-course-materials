import React, {useEffect} from 'react';
import {Stack} from "react-bootstrap";
import {TodoCreator} from "./components/TodoCreator";
import {TodoList} from "./components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {
  addTodoAction,
  changeTodoAction,
  getTodos,
  offTrackingAddedTodos, offTrackingChangedTodos, offTrackingRemovedTodos,
  onTrackingAddedTodos, onTrackingChangedTodos, onTrackingRemovedTodos,
  pushTodoToFb, removeTodoFromFb, updateTodoInFb
} from "../../store/todo";
import {createTodoEntity} from "./models";


export const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const createTodo = (todo) => {
    dispatch(pushTodoToFb(
      createTodoEntity(todo.title, todo.content)
    ))
  }

  const changeTodo = (todoId, isDone) => {
    dispatch(
      updateTodoInFb(todoId, {
        isDone
      })
    );
  }

  const removeTodo = (todoId) => {
    dispatch(removeTodoFromFb(todoId))
  }

  useEffect(() => {
    dispatch(onTrackingRemovedTodos);
    dispatch(onTrackingChangedTodos);
    dispatch(onTrackingAddedTodos);

    return () => {
      dispatch(offTrackingChangedTodos);
      dispatch(offTrackingRemovedTodos);
      dispatch(offTrackingAddedTodos);
    }
  }, [])

  return (
    <Stack gap={1}>
      <TodoCreator onSend={createTodo}/>
      <TodoList removeTodo={removeTodo} onChange={changeTodo} list={todos}/>
    </Stack>
  );
};

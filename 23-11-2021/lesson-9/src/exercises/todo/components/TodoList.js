import React from 'react';
import {Stack} from "react-bootstrap";
import {TodoItem} from "./TodoItem";


export const TodoList = ({list, onChange, removeTodo}) => {
  return (
    <Stack gap={2}>
      {
        list.map((item) => (<TodoItem removeTodo={removeTodo} key={item.id} {...item} onChange={onChange} />))
      }
    </Stack>
  );
};

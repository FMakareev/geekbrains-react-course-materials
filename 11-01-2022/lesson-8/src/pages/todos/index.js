import React, {useEffect} from 'react';
import {newTodos} from "../../store/newTodos";
import {useDispatch} from "react-redux";

export const Todos = (props) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(newTodos.actions.getDataWithThunk);
  }, []);
  return (
    <div>
      Index
    </div>
  );
};

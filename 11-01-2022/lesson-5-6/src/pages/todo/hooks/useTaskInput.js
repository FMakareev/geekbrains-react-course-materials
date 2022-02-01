import {useCallback, useState} from "react";
import {addTodoAction} from "../../../store/todo";
import {TASK_STATUS_FILTER} from "../../../constants";
import {useDispatch} from "react-redux";


export const useTaskInput = ({projectID}) => {
  const [taskNameValue, setTaskNameValue] = useState();

  const dispatch = useDispatch();

  const onChangeTaskName = useCallback((event) => {
    setTaskNameValue(event.target.value);
  }, []);


  const onSubmitTaskName = useCallback((event) => {
    event.preventDefault();

    dispatch(addTodoAction(projectID,{
      id: Date.now(),
      text: taskNameValue,
      status: TASK_STATUS_FILTER.working,
    }));

    setTaskNameValue('');
  }, [])

  return {
    onChangeTaskName,
    onSubmitTaskName,
    taskNameValue
  }
}

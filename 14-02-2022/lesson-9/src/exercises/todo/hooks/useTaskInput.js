import {useCallback, useState} from "react";
import {addTodoCommand} from "../../../store/todo";
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

    dispatch(addTodoCommand(projectID,{
      text: taskNameValue,
      status: TASK_STATUS_FILTER.working,
    }));

    setTaskNameValue('');
  }, [taskNameValue])

  return {
    onChangeTaskName,
    onSubmitTaskName,
    taskNameValue
  }
}

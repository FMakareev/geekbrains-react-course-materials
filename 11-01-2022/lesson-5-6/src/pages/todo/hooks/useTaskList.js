import {useDispatch, useSelector} from "react-redux";
import {getFilteredByStatusTaskList} from "../../../store/todo/selectors";
import {changeTodoStatus, removeTodoAction} from "../../../store/todo";
import {toggleTaskStatus} from "../../../constants";
import {useCallback} from "react";


export const useTaskList = ({projectID}) => {

  const dispatch = useDispatch();
  const taskList = useSelector(getFilteredByStatusTaskList(projectID))

  const onChangeTaskStatus = useCallback((todoId, status) => () => {
    dispatch(changeTodoStatus(projectID, todoId, toggleTaskStatus(status)))
  }, []);

  const onRemoveTask = useCallback((todoId) => () => {
    dispatch(removeTodoAction(todoId))
  }, [])


  return {
    taskList,
    onChangeTaskStatus,
    onRemoveTask
  }
}

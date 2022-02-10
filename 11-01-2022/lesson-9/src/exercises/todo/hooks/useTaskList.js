import {useDispatch, useSelector} from "react-redux";
import {getFilteredByStatusTaskList} from "../../../store/todo/selectors";
import {
  addTodoOffTracker,
  addTodoTracker,
  changeTodoCommand,
  changeTodoOffTracker,
  changeTodoTracker,
  removeTodoAction
} from "../../../store/todo";
import {toggleTaskStatus} from "../../../constants";
import {useCallback, useEffect} from "react";


export const useTaskList = ({projectID}) => {

  const dispatch = useDispatch();
  const taskList = useSelector(getFilteredByStatusTaskList(projectID))

  const onChangeTaskStatus = useCallback((todoId, status) => () => {
    dispatch(changeTodoCommand(projectID, todoId, toggleTaskStatus(status)))
  }, []);

  const onRemoveTask = useCallback((todoId) => () => {
    dispatch(removeTodoAction(todoId))
  }, [])


  useEffect(() => {
    dispatch(changeTodoTracker(projectID));
    dispatch(addTodoTracker(projectID));
    return () => {
      dispatch(changeTodoOffTracker(projectID));
      dispatch(addTodoOffTracker(projectID));
    }
  }, [projectID]);

  return {
    taskList,
    onChangeTaskStatus,
    onRemoveTask
  }
}

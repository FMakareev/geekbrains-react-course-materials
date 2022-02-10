import {useDispatch, useSelector} from "react-redux";
import {getTasksStatusFilter} from "../../../store/todo/selectors";
import {setFilterByStatusAction} from "../../../store/todo";
import {useCallback} from "react";


export const useTaskFilter = () => {

  const dispatch = useDispatch();

  const currentStatus = useSelector(getTasksStatusFilter)

  const taskStatusFilterActive = useCallback((status) => (currentStatus) => status === currentStatus ? "primary" : "light", []);

  const onChangeStatusFilter = useCallback((status) => () => {
    dispatch(setFilterByStatusAction(status))
  },[])

  return {
    currentStatus,
    taskStatusFilterActive,
    onChangeStatusFilter
  }
}

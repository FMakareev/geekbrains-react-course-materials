import {TASK_STATUS_FILTER} from "../../constants";

export const getTasksFromReducer = (state) => state.tasks;

export const getProjectTasks = (projectID) => (state) => getTasksFromReducer(state).tasks[projectID];

export const getTasksFilter = (state) => getTasksFromReducer(state).filter;

export const getTasksStatusFilter = (state) => getTasksFilter(state).status;

export const getFilteredByStatusTaskList = (projectID) => (state) => {
  const list = getProjectTasks(projectID)(state);
  const filter = getTasksFilter(state);

  if(filter.status === TASK_STATUS_FILTER.all) {
    return list;
  }

  return list?.filter(({status}) => status === filter.status);
}

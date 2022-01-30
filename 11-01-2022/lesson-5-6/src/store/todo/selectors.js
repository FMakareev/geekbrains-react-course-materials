
const add = (a) => (b) => a + b;

add(2)(3)
const add2 = add(2)

add2(5)

export const getTasksFromReducer = (state) => state.tasks;

export const getProjectTasks = (projectID) => (state) => getTasksFromReducer(state).tasks[projectID];

export const getTasksFilter = (state) => getTasksFromReducer(state).filter;

export const getFilteredByStatusTaskList = (projectID) => (state) => {
  const list = getProjectTasks(projectID)(state);
  const filter = getTasksFilter(state);

  if(filter.status === undefined) {
    return list;
  }

  return list.filter(({status}) => status === filter.status);
}

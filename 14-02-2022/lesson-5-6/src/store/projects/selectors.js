
export const getProjectsFromState = (state) => state.project;

export const getProjectList = (state) => getProjectsFromState(state)?.list

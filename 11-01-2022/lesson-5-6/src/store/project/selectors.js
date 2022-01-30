
export const getProjectsFromReducer = (state) => state.projects;

export const getProjects = (state) => getProjectsFromReducer(state).projects;

export const hasProjectSelector = (projectID) => (state) => getProjects(state).findIndex(({id}) => id.toString() === projectID) !== -1;


export const getProjectsFromReducer = (state) => state.projects;

export const getProjects = (state) => getProjectsFromReducer(state).projects;

export const getProjectsIsLoading = (state) => getProjectsFromReducer(state).isLoading;

export const hasProjectSelector = (projectID) => (state) => getProjects(state).findIndex(({id}) => id.toString() === projectID) !== -1;

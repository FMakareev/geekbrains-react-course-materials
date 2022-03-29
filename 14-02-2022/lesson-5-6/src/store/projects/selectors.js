
export const getProjectsFromState = (state) => state.project;

export const getProjectList = (state) => getProjectsFromState(state)?.list
export const getProjectIsLoading = (state) => getProjectsFromState(state)?.isLoading
export const getProjectError = (state) => getProjectsFromState(state)?.error

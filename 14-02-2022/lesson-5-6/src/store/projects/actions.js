

export const CREATE_PROJECT = 'CREATE_PROJECT';

export const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project,
})


export const createProjectThunk = (project) => (dispatch) => {
  setTimeout(() => {
    dispatch(createProject(project))
  }, 2000)
}

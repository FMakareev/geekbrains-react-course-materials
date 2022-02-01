
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const ADD_PROJECT_LOADING = 'ADD_PROJECT_LOADING'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'


export const addProjectLoadingAction = (isLoading) => ({
  type: ADD_PROJECT_LOADING,
  payload: isLoading
})

export const addProjectSuccessAction = (project) => ({
  type: ADD_PROJECT_SUCCESS,
  payload: project
})

export const addProjectAction = (project) => (dispatch) => {

  dispatch(addProjectLoadingAction(true));

  setTimeout(() => {
    dispatch(addProjectSuccessAction(project));
    dispatch(addProjectLoadingAction(false));
  }, 3000);
}

export const removeProjectAction = (projectID) => ({
  type: REMOVE_PROJECT,
  payload: projectID
})



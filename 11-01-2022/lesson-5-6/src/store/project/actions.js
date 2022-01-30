

export const ADD_PROJECT = 'ADD_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'


export const addProjectAction = (project) => ({
  type: ADD_PROJECT,
  payload: project
})

export const removeProjectAction = (projectID) => ({
  type: REMOVE_PROJECT,
  payload: projectID
})

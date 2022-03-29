import {projectsApi} from "../../api/endpoints/projects";


export const CREATE_PROJECT = 'CREATE_PROJECT';


export const SET_LOADING_PROJECT = 'SET_LOADING_PROJECT'
export const SET_ERROR_PROJECT = 'SET_ERROR_PROJECT'
export const SET_PROJECTS = 'SET_PROJECTS'

export const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project,
})

export const setLoadingProject = (isLoading) => ({
  type: SET_LOADING_PROJECT,
  payload: isLoading
})
export const setErrorProject = (error) => ({
  type: SET_ERROR_PROJECT,
  payload: error
})
export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects
})

export const getProjectsThunk = () => async (dispatch) => {

  dispatch(setLoadingProject(true))

  try {
    const data = await projectsApi.get();

    dispatch(setProjects(data))
  } catch (e) {
    dispatch(setErrorProject(e));
  }

  dispatch(setLoadingProject(false))

}

export const createProjectThunk = (project) => async (dispatch) => {

  dispatch(setLoadingProject(true))

  try {
    const data = await projectsApi.create(project);

    dispatch(createProject(data))
  } catch (e) {
    dispatch(setErrorProject(e));
  }

  dispatch(setLoadingProject(false))
}

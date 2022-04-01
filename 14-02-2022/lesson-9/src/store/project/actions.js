import {projectRef} from "../../firebase";

export const ADD_PROJECT_FAIL = 'ADD_PROJECT_FAIL'
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const ADD_PROJECT_LOADING = 'ADD_PROJECT_LOADING'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'
export const RESET_PROJECT = 'RESET_PROJECT'


export const resetProjects = () => ({
  type: RESET_PROJECT,
})

export const removeProjectAction = (projectID) => ({
  type: REMOVE_PROJECT,
  payload: projectID
})

export const addProjectFailAction = (error) => ({
  type: ADD_PROJECT_FAIL,
  payload: error
})

export const addProjectLoadingAction = (isLoading) => ({
  type: ADD_PROJECT_LOADING,
  payload: isLoading
})

export const addProjectSuccessAction = (project) => ({
  type: ADD_PROJECT_SUCCESS,
  payload: project
})




export const addProjectAction = (project) => (dispatch) => {
  projectRef.push(project, (error) => {
    if (error) {
      dispatch(addProjectFailAction(error));
    }
  })
}

export const addProjectTracker = (dispatch) => {
  projectRef.on('child_added', (snapshot) => {
    dispatch(addProjectSuccessAction({
      ...snapshot.val(),
      id: snapshot.key,
    }))
  })
}

export const addProjectOffTracker = (dispatch) => {
  dispatch(resetProjects());
  projectRef.off('child_added');
}



export const removeProjectTracker = (dispatch) => {
  projectRef.on('child_removed', (snapshot) => {
    dispatch(removeProjectAction(snapshot.key))
  })
}

export const removeProjectOffTracker = () => {
  projectRef.off('child_removed');
}

export const removeProjectCommand = (projectId) => (dispatch) =>{
  projectRef.child(projectId).remove((error) => {
    if (error) {
      dispatch(addProjectFailAction(error));
    }
  })
}


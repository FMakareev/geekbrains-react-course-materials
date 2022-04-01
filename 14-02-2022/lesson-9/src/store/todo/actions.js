import {tasksRef} from "../../firebase";

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_ALL_TODOS_BY_PROJECT_ID = 'REMOVE_ALL_TODOS_BY_PROJECT_ID'
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS'

export const SET_FILTER_BY_STATUS = 'SET_FILTER_BY_STATUS'

export const setFilterByStatusAction = (filterBy) => ({
  type: SET_FILTER_BY_STATUS,
  payload: filterBy,
})

export const addTodoAction = (projectID, task) => ({
  type: ADD_TODO,
  payload: {
    task,
    projectID
  },
})

export const removeTodoAction = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId
})

export const removeAllTodosByProjectIdAction = (projectId) => ({
  type: REMOVE_ALL_TODOS_BY_PROJECT_ID,
  payload: projectId
})

export const changeTodoStatus = (projectID,todoId, status) => ({
  type: CHANGE_TODO_STATUS,
  payload: {
    projectID,
    id: todoId,
    status
  }
})


export const addTodoCommand = (projectID, task) => () => {
  tasksRef.child(projectID).push(task, (error) => {
    if (error) {
      console.log(error);
    }
  })
}
export const addTodoTracker = (projectID) => (dispatch) => {
  tasksRef.child(projectID).on('child_added', (snapshot) => {
    dispatch(addTodoAction(projectID, {
      ...snapshot.val(),
      id: snapshot.key
    }))
  })
}
export const addTodoOffTracker = (projectID) =>  (dispatch) => {
  dispatch(removeAllTodosByProjectIdAction(projectID));
  tasksRef.child(projectID).off('child_added');
}

export const removeTodoCommand = () => {

}
export const removeTodoTracker = () => {}
export const removeTodoOffTracker = () => {}


export const changeTodoCommand = (projectID,todoId, status) => (dispatch)=> {
  tasksRef.child(projectID).child(todoId).update({
    status
  }, (error) => {
    if (error) {
      console.log(error);
    }
  })
}
export const changeTodoTracker = (projectID) => (dispatch) => {
  tasksRef.child(projectID).on('child_changed', (snapshot) => {
    dispatch(changeTodoStatus(projectID, snapshot.key, snapshot.val().status));
  })
}
export const changeTodoOffTracker = (projectID) => () => {
  tasksRef.child(projectID).off('child_changed')
}

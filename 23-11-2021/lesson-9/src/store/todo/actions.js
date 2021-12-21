import {todosRef} from "../../firebase";

export const DELETE_TODO = 'DELETE_TODO'
export const RESET_TODOS = 'RESET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const ADD_TODOS = 'ADD_TODOS'
export const CHANGE_TODO = 'CHANGE_TODO'

export const deleteTodoAction = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});

export const addTodoAction = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const addTodosAction = (todos) => ({
  type: ADD_TODOS,
  payload: todos
})

export const changeTodoAction = (todoId, todo) => ({
  type:CHANGE_TODO,
  payload: {
    todoId,
    todo,
  }
})

export const pushTodoToFb = (todo) => (dispatch) => {
  todosRef.push(todo, (error) => {
    console.log(error);
  });
}



export const removeTodoFromFb = (todoId) => () => {
  todosRef.child(todoId).remove((error) => {
    console.log(error);
  })
}

export const updateTodoInFb = (todoId, todo) => () => {
  todosRef.child(todoId).update(todo, (error) => {
    console.log(error);
  })
}


export const onTrackingAddedTodos = (dispatch) => {
  todosRef.on('child_added', (snapshot) => {
    dispatch(addTodoAction({
      ...snapshot.val(),
      id: snapshot.key,
    }))
  })
}

export const offTrackingAddedTodos = () => {
  todosRef.off('child_added');
}

export const onTrackingRemovedTodos = (dispatch) => {
  todosRef.on('child_removed', (snapshot) => {
    dispatch(deleteTodoAction(snapshot.key))
  })
}
export const offTrackingRemovedTodos = () => {
  todosRef.off('child_removed');
}

export const onTrackingChangedTodos = (dispatch) => {
  todosRef.on('child_changed', (snapshot) => {
    dispatch(changeTodoAction(snapshot.key, snapshot.val()))
  })
}
export const offTrackingChangedTodos = () => {
  todosRef.off('child_changed');
}

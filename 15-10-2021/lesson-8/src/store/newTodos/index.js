import {createApiReducer} from "../../helpers/createApiReducer";

export const newTodos = createApiReducer('NEW_TODOS', "https://jsonplaceholder.typicode.com/todos")

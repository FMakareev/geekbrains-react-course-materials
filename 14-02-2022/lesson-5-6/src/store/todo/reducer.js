import {CREATE_TODO, CHANGE_TODO_STATUS,DELETE_TODO} from './actions';

const initialState = {
    todos: [],
}

export const todoReducer = (state = initialState, action) => {

    switch(action.type) {
        case(CREATE_TODO): {

            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        }
        case(DELETE_TODO): {

            return {
                ...state,
                todos: state.todos.filter(({id}) => id !== action.payload),
            }
        }
        case(CHANGE_TODO_STATUS): {
            const {id, status} = action.payload;
            const targetIndex = state.todos.findIndex((item) => item.id === id);

            if(targetIndex === -1){
                return state;
            }
            const copyTodos = [...state.todos]

            copyTodos[targetIndex] = {
                ...copyTodos[targetIndex],
                status
            }

            return {
                ...state,
                todos: copyTodos,
            } 
        }
        default: 
            return state;
    }
}
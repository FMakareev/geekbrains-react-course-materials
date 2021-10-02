import {ADD_USER_ACTION, REMOVE_USER_ACTION} from "./actions";


export const userInitialState = {
    list: [],
}

export const userReducer = (state = userInitialState, action) => {

    switch (action.type) {
        case ADD_USER_ACTION: {
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload,
                ]
            }
        }
        case REMOVE_USER_ACTION: {
            return {
                ...state,
                list: state.list.filter((user) => user.id !== action.payload),
            }
        }
        default:{
            return state;
        }
    }
}
import {REMOVE_MESSAGE, ADD_MESSAGE_ERROR, ADD_MESSAGE_LOADING, ADD_MESSAGE_SUCCESS} from "./actions";


export const initialState = {
    messages: [],
    isLoading: false,
    isError: false,
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case ADD_MESSAGE_ERROR: {
            return {
                ...state,
                isError: action.payload,
            }
        }
        case ADD_MESSAGE_SUCCESS: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload,
                ]
            }
        }
        case REMOVE_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages.filter((message) => message.id !== action.payload),
                ]
            }
        }
        default: {
            return state;
        }
    }
}

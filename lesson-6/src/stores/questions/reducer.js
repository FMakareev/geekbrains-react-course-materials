import {ADD_QUESTION_LIST, CLEAR_QUESTION_LIST, LOADING_QUESTION_LIST, ERROR_LOADING_QUESTION_LIST} from "./actions";


const initialState = {
    questions: [],
    isLoading: true,
    error: null
}

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_QUESTION_LIST): {
            return {
                ...state,
                questions: action.payload,
            }
        }
        case (LOADING_QUESTION_LIST): {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case (ERROR_LOADING_QUESTION_LIST): {
            return {
                ...initialState,
                error: action.payload
            }
        }
        case (CLEAR_QUESTION_LIST): {
            return initialState
        }
        default: {
            return state;
        }
    }
}
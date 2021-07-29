import {ADD_QUESTION_LIST, CLEAR_QUESTION_LIST} from "./actions";


const initialState = {
    questions: []
}

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_QUESTION_LIST): {
            return {
                questions: action.payload,
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
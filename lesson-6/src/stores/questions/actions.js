

export const ADD_QUESTION_LIST = 'ADD_QUESTION_LIST';
export const CLEAR_QUESTION_LIST = 'CLEAR_QUESTION_LIST';

export const createAddQuestionList = (questionList) => ({
    type: ADD_QUESTION_LIST,
    payload: questionList,
})

export const createClearQuestionList = () => ({
    type: CLEAR_QUESTION_LIST,
})
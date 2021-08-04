import {questionsApi} from "../../api/questionsApi";


export const ADD_QUESTION_LIST = 'ADD_QUESTION_LIST';

export const LOADING_QUESTION_LIST = 'LOADING_QUESTION_LIST';

export const ERROR_LOADING_QUESTION_LIST = 'ERROR_LOADING_QUESTION_LIST';

export const CLEAR_QUESTION_LIST = 'CLEAR_QUESTION_LIST';

export const createAddQuestionList = (questionList) => ({
  type: ADD_QUESTION_LIST,
  payload: questionList,
})

export const createClearQuestionList = () => ({
  type: CLEAR_QUESTION_LIST,
})

export const createLoadingQuestionList = (isLoading) => ({
  type: LOADING_QUESTION_LIST,
  payload: isLoading,
})

export const createErrorLoadingQuestionList = (error) => ({
  type: ERROR_LOADING_QUESTION_LIST,
  payload: error,
})


export const createActionLoadingQuestions = () => async (dispatch, getState) => {

  dispatch(createLoadingQuestionList(true))

  const [error, result] = await questionsApi.getList();

  if (error) {
    dispatch(createErrorLoadingQuestionList(error))
  }

  if (result) {
    dispatch(createAddQuestionList(result?.results))
  }

  dispatch(createLoadingQuestionList(false))
}







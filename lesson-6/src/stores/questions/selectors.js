
export const getQuestionsListSelector = (state) => state.questions.questions || [];

export const getQuestionLoadingStatusSelector = (state) => state.questions.isLoading

export const getQuestionErrorSelector = (state) => state.questions.error

export const getQuestionSelector = (questionIndex) => (state) => getQuestionsListSelector(state)[questionIndex];

export const getCorrectAnswerSelector = (questionIndex) => (state) => getQuestionSelector(questionIndex)(state).correct_answer;

export const getIncorrectAnswerSelector = (questionIndex) => (state) => getQuestionSelector(questionIndex)(state).incorrect_answers || [];

export const getAllAnswerForQuestionSelector = (questionIndex) => (state) => {

  const correct = getCorrectAnswerSelector(questionIndex)(state);
  const incorrect = getIncorrectAnswerSelector(questionIndex)(state);

  return [...incorrect, correct];
}


export const questionsSelectors = {
  getQuestionLoadingStatusSelector,
  getQuestionErrorSelector,
  getAllAnswerForQuestionSelector,
  getCorrectAnswerSelector,
  getQuestionSelector,
  getQuestionsListSelector,
  getIncorrectAnswerSelector,
}
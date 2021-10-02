
export const getQuestionsListSelector = (state) => state.questions.questions || [];

export const getQuestionLoadingStatusSelector = (state) => state.questions.isLoading

export const getQuestionErrorSelector = (state) => state.questions.error

export const getQuestionSelector = (questionIndex) => (state) => getQuestionsListSelector(state)[questionIndex];





export const questionsSelectors = {
  getQuestionLoadingStatusSelector,
  getQuestionErrorSelector,
  getQuestionSelector,
  getQuestionsListSelector,
}